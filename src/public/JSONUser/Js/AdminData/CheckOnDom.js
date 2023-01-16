import { StartFunc as CheckCredentialsStartFunc } from "./CheckCredentials.js";

let StartFunc = async ({ inSubRoute }) => {
    let jVarLocalObject = {};
    let jVarReturnData;

    jVarLocalObject.UserName = document.getElementById("KUserNameInput").value;
    jVarLocalObject.Password = document.getElementById("KPasswordInput").value;

    if (jVarLocalObject.UserName !== "" && jVarLocalObject.Password !== "") {
        jVarReturnData = await CheckCredentialsStartFunc({
            inSubRoute,
            inUserName: jVarLocalObject.UserName,
            inPassWord: jVarLocalObject.Password
        });

        return await jVarReturnData;
    };

    return await false;
};

export { StartFunc }
