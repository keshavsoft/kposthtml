let jFGetCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

let jFInHeader = () => {
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
};

let jFCheckToken = ({ inTokenName = "KUMAToken" }) => {
    let jVarLocalCookieValue;
    //jVarLocalCookieValue = this.Login.ClientSideCookieFuncs.getCookie("KAToken");
    let jVarLocalTokenName = inTokenName;

    jVarLocalCookieValue = jFGetCookie(jVarLocalTokenName);

    if (jVarLocalCookieValue === null) {
        return false;
    } else {
        jFInHeader();
        return true;
    };
};

export { jFCheckToken }