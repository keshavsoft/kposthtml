class GlobalClassForLogin {
    constructor({ inProjectName }) {
        this.Config = {
            RouteStart: {
                Start: "JSONUser",
                SubRoute: "API",
                HtmlPath: "",
                AdminSubRoute: "AdminApi",
            },
            Modal: {
                Id: "LoginModalId"
            },
            Public: {
                ProjectName: ""
            },
            Customize: {
                ModalPopUp: {
                    Show: true,
                    Type: "SweetAlert"
                }
            },
            ClientSide: {
                UrlForIp_Old: "https://api.ipify.org/",
                UrlForIp: "http://httpbin.org/ip",
            }
        };

        if (inProjectName === undefined) {
            this.Config.Public.ProjectName = this.Config.RouteStart.Start
        } else {
            this.Config.RouteStart.Start = inProjectName;
            this.Config.Public.ProjectName = inProjectName;
        };
    };

    Login = {
        LocalStorage: {
            FirmDetails: ({ inUserName, inFirmDetails, inUserKey, inFirmKey }) => {
                localStorage.setItem(inUserKey, inUserName);
                localStorage.setItem(inFirmKey, JSON.stringify(inFirmDetails));
            }
        },
        LoginCheck: async () => {
            let jVarLocalObject = {};
            let jVarReturnData;

            jVarLocalObject.UserName = document.getElementById("KUserNameInput").value;
            jVarLocalObject.Password = document.getElementById("KPasswordInput").value;

            if (jVarLocalObject.UserName !== "" && jVarLocalObject.Password !== "") {
                jVarReturnData = await this.Login.CheckUserNamePassword({ inUserName: jVarLocalObject.UserName, inPassword: jVarLocalObject.Password });

                if (jVarReturnData.KTF) {
                    //  jVarGlobalClientObject.DataApi.Folders.PullData();
                };
            };
        },
        LogOut: async () => {
            this.Login.ClientSideCookieFuncs.DeleteCookie();
            localStorage.removeItem("kUserName");
            localStorage.removeItem("FirmDetails");

            let jVarLocalId = this.Config.Modal.Id;
            var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

            myModal.show();
        },
        CheckUserNamePassword: async ({ inUserName, inPassword }) => {
            let jVarLocalUserCheckRoute = this.Config.RouteStart.Start;
            // let jVarLocalFetchUrl = `/${jVarLocalUserCheckRoute}/Validate/Users/InUserDataJson/ForUserNameAndPassword/TokenToCookie`;
            let jVarLocalFetchUrl = "/JSONUser/Admin/Api/InAdminDataJson/Check/TokenToCookie";

            let response = await fetch(jVarLocalFetchUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ inUserName, inPassword })
            });
            let FetchDataJson = await response.json();

            if (FetchDataJson !== null) {
                if (FetchDataJson.KTF) {
                    var myModalEl = document.getElementById('LoginModalId');

                    var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance

                    modal.hide();

                    this.Login.LocalStorage.FirmDetails({ inUserName, inFirmDetails: FetchDataJson });
                    this.Login.ClientSideCookieFuncs.CheckToken();
                    return await FetchDataJson;
                } else {
                    document.getElementById("KUserNameInput").classList.add("is-invalid");
                };
            };
        },
        StatusCodeFuncs: {
            Html: {
                Code404: ({ inResponse }) => {
                    if (inResponse.status === 404) {
                        jVarGlobalAdmin.HTMLPrepare.jFBS4Alerts.AppendtoKCont1.dangerClosable({ inJVarDataToDisplay: `Html File not Found ${inResponse.url}` });
                        return null;

                    };


                    return inResponse.text();
                }
            },
            Code403: ({ inResponse }) => {
                if (inResponse.status === 403) {
                    let jVarLocalLoginFormPopUpId = document.getElementById("LoginFormPopUpId");

                    if (jVarLocalLoginFormPopUpId !== null) {
                        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), { keyboard: false, focus: true });
                        myModal.show();
                    };
                    return null;
                };

                return inResponse.json();
            }
        },
        ShowLoginDetailsOnDOM: {
            InHeader: () => {
                let LocalUserName = localStorage.getItem("kUserName");
                let jVarLocalHeaderLoginButtonId = document.getElementById("HeaderLoginButtonId");

                if (jVarLocalHeaderLoginButtonId !== null) {
                    jVarLocalHeaderLoginButtonId.classList.add("visually-hidden");
                    document.getElementById("HeaderUserIdDropDown").classList.remove("visually-hidden");

                    if (LocalUserName !== null) {
                        document.getElementById("HeaderUserIdDropDown").innerHTML =
                            document.getElementById("HeaderUserIdDropDown").innerHTML.replace("UserName", LocalUserName);

                        document.getElementById('NavBarId').classList.remove("bg-danger");
                        document.getElementById('NavBarId').classList.add("bg-dark");
                    };
                };
            }
        },
        ClientSideCookieFuncs: {
            getCookie: (name) => {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            },
            CheckToken: ({ inUserKey, inFirmKey, inTokenName }) => {
                let jVarLocalCookieValue = this.Login.ClientSideCookieFuncs.getCookie(inTokenName);

                if (jVarLocalCookieValue === null) {
                    localStorage.removeItem(inUserKey);
                    localStorage.removeItem(inFirmKey);

                    document.getElementById('NavBarId').classList.add("bg-danger");
                    document.getElementById('NavBarId').classList.remove("bg-dark");

                    this.Login.ClientSideCookieFuncs.DeleteCookie({ inTokenName });

                    let jVarLocalId = this.Config.Modal.Id;
                    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

                    myModal.show();
                } else {
                    this.Login.ShowLoginDetailsOnDOM.InHeader();
                };
            },
            DeleteCookie: ({ inTokenName }) => {
                document.cookie = `${inTokenName}=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;`;
            }
        }
    };
};

let jVarGlobalProject = "JSONUser";

let GlobalFuncsForLogin = new GlobalClassForLogin({ inProjectName: jVarGlobalProject });

let jVarLocalLoginButtonOnModalId = document.getElementById("LoginButtonOnModalId");

if ((jVarLocalLoginButtonOnModalId == null) === false) { //Executes if variable is null OR undefined

    jVarLocalLoginButtonOnModalId.addEventListener("click", GlobalFuncsForLogin.Login.LoginCheck);

};

let jVarLocalHeaderLoginAnchorId = document.getElementById("HeaderLoginAnchorId");

if ((jVarLocalHeaderLoginAnchorId == null) === false) { //Executes if variable is null OR undefined

    jVarLocalHeaderLoginAnchorId.addEventListener("click", GlobalFuncsForLogin.Login.LogOut);

};
//jVarLocalLoginButtonOnModalId.addEventListener("click", jVarGlobalClientObject.UI.ModalFuncs.Show"

//GlobalFuncsForLogin.Login.ClientSideCookieFuncs.CheckToken();

let StartFunc = ({ inUserKey, inFirmKey, inTokenName }) => {
    GlobalFuncsForLogin.Login.ClientSideCookieFuncs.CheckToken({ inUserKey, inFirmKey, inTokenName });
};

export { StartFunc }
