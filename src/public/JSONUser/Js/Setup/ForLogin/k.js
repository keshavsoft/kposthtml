
    class jPrepareClass {
        constructor({ inProjectName }) {
            this.Config = {
                RouteStart: {
                    Start: "Gps",
                    SubRoute: "API",
                    HtmlPath: "",
                    UserCheckRoute: "JSONUser",
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
                Token: {
                    KName: "KUMAToken"
                }
            };

            if (inProjectName === undefined) {
                this.Config.Public.ProjectName = this.Config.RouteStart.Start
            } else {
                this.Config.RouteStart.Start = inProjectName;
                this.Config.Public.ProjectName = inProjectName;
            };
        };

        UI = {
            ValidateFuncs: {
                LoginFormPopUpValidate: () => {
                    let jVarLocalLoginFormPopUpId = document.getElementById("LoginFormPopUpId");

                    if (jVarLocalLoginFormPopUpId != null) {
                        jVarLocalLoginFormPopUpId.addEventListener('submit', function (event) {
                            if (!jVarLocalLoginFormPopUpId.checkValidity()) {
                                event.preventDefault()
                                event.stopPropagation()
                            }

                            jVarLocalLoginFormPopUpId.classList.add('was-validated')
                        }, false);
                    };
                }
            },
            ModalFuncs: {
                LoadToDOM: () => {
                    let LocalFetchURL = `/${this.Config.Public.ProjectName}/Html/Modals/Login.html`;
                    fetch(LocalFetchURL).then((FetchData) => { return FetchData.text() })
                        .then((FetchDataText) => {
                            let LocalModalId = this.Config.Modal.Id;
                            document.body.innerHTML += FetchDataText;

                            document.getElementById(LocalModalId).addEventListener('shown.bs.modal', function (event) {
                                event.currentTarget.querySelector("input").focus();
                            });

                            this.UI.ValidateFuncs.LoginFormPopUpValidate();

                        }).catch((error) => console.log(error));
                },
                Show: () => {
                    localStorage.removeItem("kUserName");
                    localStorage.removeItem("FirmDetails");
                    this.Login.ClientSideCookieFuncs.DeleteCookie();

                    let jVarLocalId = this.Config.Modal.Id;
                    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

                    myModal.show();
                }
            },
            Show: {
                ShowData: () => {
                    fetch('/Bs5Data/Html/Modals/ShowData.html')
                        .then(response => response.text())
                        .then(dataForUi => {
                            //console.log(data);
                            document.getElementById("KCont1").innerHTML = dataForUi;
                        });
                }
            },
            UserData: {
                FetchHtml: (inJVarThis) => {
                    this.NavBar.SetActiveItem(inJVarThis);

                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalFetchUrl = `/${jVarLocalRoute}/Html/UserData/UserData.html`;

                    fetch(`${jVarLocalFetchUrl}`)
                        .then(response => {
                            return this.Login.StatusCodeFuncs.Html.Code404({ inResponse: response });
                        })
                        .then(dataForUi => {
                            if (dataForUi !== null) {
                                //document.querySelector("body main .container").innerHTML = dataForUi;
                                document.getElementById("KCont1").innerHTML = dataForUi;

                                jVarGlobalClientObject.DataApi.Folders.PullData();
                            }
                        });
                }
            },
            Reports: {
                FetchHtml: () => {
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalFetchUrl = `/${jVarLocalRoute}/Html/UserData/Reports/Reports.html`;

                    fetch(`${jVarLocalFetchUrl}`)
                        .then(response => {
                            return this.Login.StatusCodeFuncs.Html.Code404({ inResponse: response });
                        })
                        .then(dataForUi => {
                            if (dataForUi !== null) {
                                document.querySelector("body main .container").innerHTML = dataForUi;

                                jVarGlobalClientObject.DataApi.Reports.Items.PullData();
                            }
                        });
                },
                WithFilters: () => {
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalFetchUrl = `/${jVarLocalRoute}/Html/UserData/Reports/Filters.html`;

                    fetch(`${jVarLocalFetchUrl}`)
                        .then(response => {
                            return this.Login.StatusCodeFuncs.Html.Code404({ inResponse: response });
                        })
                        .then(dataForUi => {
                            if (dataForUi !== null) {
                                document.querySelector("body main .container").innerHTML = dataForUi;

                                jVarGlobalClientObject.DataApi.Reports.Items.PullData();
                            }
                        });
                }
            },
            DataConfig: {
                FetchHtml: () => {
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalFetchUrl = `/${jVarLocalRoute}/Html/UserData/DataConfig.html`;

                    fetch(`${jVarLocalFetchUrl}`)
                        .then(response => {
                            return this.Login.StatusCodeFuncs.Html.Code404({ inResponse: response });
                        })
                        .then(dataForUi => {
                            if (dataForUi !== null) {
                                document.querySelector("body main .container").innerHTML = dataForUi;

                                jVarGlobalClientObject.DataApi.Reports.Items.PullData();
                            }
                        });
                },
                WithFilters: () => {
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalFetchUrl = `/${jVarLocalRoute}/Html/UserData/Dataconfig.html`;

                    fetch(`${jVarLocalFetchUrl}`)
                        .then(response => {
                            return this.Login.StatusCodeFuncs.Html.Code404({ inResponse: response });
                        })
                        .then(dataForUi => {
                            if (dataForUi !== null) {
                                document.querySelector("body main .container").innerHTML = dataForUi;

                                jVarGlobalClientObject.DataApi.Reports.Items.PullData();
                            }
                        });
                }
            }
        };

        Login = {
            LocalStorage: {
                FirmDetails: ({ inUserName, inFirmDetails }) => {
                    localStorage.setItem("kUserName", inUserName);
                    localStorage.setItem("FirmDetails", JSON.stringify(inFirmDetails));
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
                        jVarLocalApiFuncs.ShowData();
                    };
                };
            },
            CheckUserNamePassword: async ({ inUserName, inPassword }) => {
                //let jVarLocalUserCheckRoute = this.Config.RouteStart.UserCheckRoute;
                //let jVarLocalFetchUrl = `http://localhost:5000/JSONUser/Admin/Api/Check/LoginCheck/${inUserName}/${inPassword}`;
                //      let jVarLocalFetchUrl = `/JSONUser/Admin/Api/Check/LoginCheck/${inUserName}/${inPassword}`;
                let jVarLocalFetchUrl = "/JSONUser/Admin/Api/InAdminDataJson/Check/TokenToCookie";

                let response = await fetch(jVarLocalFetchUrl, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ inUserName, inPassword })
                });

                if (response.status === 503) {
                    let FetchDataText = await response.text();

                    //if (confirm("click ok to continue")) window.location = "https://github.com/keshavsoft/JSONUser";

                    if (confirm("Copy Project from Github Repo")) window.open("https://github.com/keshavsoft/JSONUser", "_blank");

                    //alert(FetchDataText);
                    return { KTF: false };
                };

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
                        document.getElementById("KUserNameInput").classList.add("is-invalid")
                    };
                };
            },
            StatusCodeFuncs: {
                Html: {
                    Code404: ({ inResponse }) => {
                        if (inResponse.status === 404) {
                            console.log("inResponse : ", inResponse);

                            jVarGlobalAdmin.HTMLPrepare.jFBS4Alerts.AppendtoKCont1.dangerClosable({ inJVarDataToDisplay: `Html File not Found ${inResponse.url}` });
                            return null;

                        };


                        return inResponse.text();
                    }
                },
                Code403: ({ inResponse }) => {
                    // console.log("inResponse : ", inResponse);
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
                        document.getElementById("HeaderUserIdLi").classList.remove("visually-hidden");

                        if (LocalUserName !== null) {
                            document.getElementById("HeaderUserIdLi").innerHTML = LocalUserName
                            //document.getElementById("HeaderUserIdDropDown").innerHTML.replace("UserName", LocalUserName);
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
                CheckToken: () => {
                    let jVarLocalCookieValue;
                    //jVarLocalCookieValue = this.Login.ClientSideCookieFuncs.getCookie("KAToken");
                    let jVarLocalTokenName = this.Config.Token.KName;

                    jVarLocalCookieValue = this.Login.ClientSideCookieFuncs.getCookie(jVarLocalTokenName);

                    if (jVarLocalCookieValue === null) {
                        this.UI.ModalFuncs.Show();
                        return false;
                    } else {
                        this.Login.ShowLoginDetailsOnDOM.InHeader();
                        return true;
                        // jVarLocalApiFuncs.ShowData();
                    };
                },
                DeleteCookie: () => {
                    let jVarLocalTokenName = this.Config.Token.KName;
                    //document.cookie = "KAToken=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;";
                    document.cookie = `${jVarLocalTokenName}=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;`;
                }
            }
        };
    };