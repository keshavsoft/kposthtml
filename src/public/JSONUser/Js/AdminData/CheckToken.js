import { StartFunc as ShowOnHeaderStartFunc } from "./ShowOnHeader.js";

let LocalShowInHeader = ({ inUserKey }) => {
    let LocalUserName = localStorage.getItem(inUserKey);
    console.log("LocalUserName : ", LocalUserName, inUserKey);
    let jVarLocalHeaderLoginButtonId = document.getElementById("HeaderLoginButtonId");

    if (jVarLocalHeaderLoginButtonId !== null) {
        jVarLocalHeaderLoginButtonId.classList.add("visually-hidden");
        document.getElementById("HeaderUserIdDropDown").classList.remove("visually-hidden");

        if (LocalUserName !== null) {
            document.getElementById("HeaderUserIdDropDown").innerHTML =
                //document.getElementById("HeaderUserIdDropDown").innerHTML.replace("UserName", LocalUserName);
                document.getElementById("HeaderUserIdDropDown").innerHTML = LocalUserName;


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

let LocalgetCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

let LocalDeleteCookie = ({ inTokenName }) => {
    document.cookie = `${inTokenName}=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;`;
};

let StartFunc = ({ inUserKey, inFirmKey, inTokenName, inModalId }) => {
    let jVarLocalCookieValue = LocalgetCookie(inTokenName);
    console.log("jVarLocalCookieValue : ", jVarLocalCookieValue, inUserKey);
    if (jVarLocalCookieValue === null) {
        localStorage.removeItem(inUserKey);
        localStorage.removeItem(inFirmKey);

        document.getElementById('NavBarId').classList.add("bg-danger");
        document.getElementById('NavBarId').classList.remove("bg-dark");

        LocalDeleteCookie({ inTokenName });

        let jVarLocalId = inModalId;
        // var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), {
        //     keyboard: true,
        //     backdrop: false
        // });

        var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });


        // console.log("myModal : ", myModal);
        myModal.show();

        // LocalFirmDetails({ inUserKey });
        // LocalShowInHeader({ inUserKey });
        //return false;
    } else {
        ShowOnHeaderStartFunc({ inUserKey });
    //    LocalFirmDetails({ inUserKey });
       // LocalShowInHeader({ inUserKey });

        let jVarLocalId = inModalId;
        var myModalEl = document.getElementById(jVarLocalId);

        var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance
        console.log("modal : ", modal, myModalEl, jVarLocalId);
        if ((modal === null) === false) {
            modal.hide();
        };

        //return true;
    };
};

export { StartFunc }