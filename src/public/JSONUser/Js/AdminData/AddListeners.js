import { StartFunc as CheckOnDomStartFunc } from "./CheckOnDom.js";
import { StartFunc as CheckTokenStartFunc } from "./CheckToken.js";

let LocalShowInHeader = ({ inUserKey }) => {
    let LocalUserName = localStorage.getItem(inUserKey);
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
};

let LocalFirmDetails = ({ inUserKey }) => {
    let LocalUserName = document.getElementById("KUserNameInput").value;
    // let jVarLocalObject.Password = document.getElementById("KPasswordInput").value;

    localStorage.setItem(inUserKey, LocalUserName);
    //    localStorage.setItem(inFirmKey, JSON.stringify(inFirmDetails));
};

let StartFunc = ({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId }) => {
    let jVarLocalLoginButtonOnModalId = document.getElementById("LoginButtonOnModalId");

    if ((jVarLocalLoginButtonOnModalId == null) === false) { //Executes if variable is null OR undefined
        jVarLocalLoginButtonOnModalId.addEventListener("click", async () => {
            await LocalButtonClickFunc({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId });
        });
    };

    let jVarLocalHeaderLoginButtonId = document.getElementById("HeaderLoginButtonId");

    if ((jVarLocalHeaderLoginButtonId == null) === false) { //Executes if variable is null OR undefined
        jVarLocalHeaderLoginButtonId.addEventListener("click", async () => {
            let jVarLocalId = inModalId;
            var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

            myModal.show();
        });
    };
};


let StartFunc1 = ({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId }) => {
    let jVarLocalLoginButtonOnModalId = document.getElementById("LoginButtonOnModalId");

    if ((jVarLocalLoginButtonOnModalId == null) === false) { //Executes if variable is null OR undefined
        jVarLocalLoginButtonOnModalId.addEventListener("click", async () => {
            let LocalFromDomFunc = await CheckOnDomStartFunc({ inSubRoute, inUserKey, inFirmKey, inTokenName });

            if (LocalFromDomFunc) {
                let LocalFromCheckTokenStartFunc = CheckTokenStartFunc({ inUserKey, inFirmKey, inTokenName });

                if (LocalFromCheckTokenStartFunc) {
                    console.log("ssssssssss");
                    let LocalModalId = inModalId;
                    var myModalEl = document.getElementById(LocalModalId);

                    var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance

                    modal.hide();

                    // this.Login.LocalStorage.FirmDetails({ inUserName, inFirmDetails: FetchDataJson });
                };
            };
        });
    };

    let jVarLocalHeaderLoginAnchorId = document.getElementById("HeaderLoginAnchorId");

    if ((jVarLocalHeaderLoginAnchorId == null) === false) { //Executes if variable is null OR undefined

        //  jVarLocalHeaderLoginAnchorId.addEventListener("click", GlobalFuncsForLogin.Login.LogOut);

    };
};


let LocalButtonClickFunc = async ({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId }) => {
    let LocalFromDomFunc = await CheckOnDomStartFunc({ inSubRoute, inUserKey, inFirmKey, inTokenName });

    if (LocalFromDomFunc.KTF) {
        LocalFirmDetails({ inUserKey });
        CheckTokenStartFunc({ inUserKey, inFirmKey, inTokenName, inModalId });

        // if (LocalFromCheckTokenStartFunc) {

        //     let LocalModalId = inModalId;
        //     var myModalEl = document.getElementById(LocalModalId);

        //     var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance

        //     modal.hide();

        //     LocalFirmDetails({ inUserKey });
        //     LocalShowInHeader({ inUserKey });
        //     // this.Login.LocalStorage.FirmDetails({ inUserName, inFirmDetails: FetchDataJson });
        // };
    };
};

export { StartFunc }
