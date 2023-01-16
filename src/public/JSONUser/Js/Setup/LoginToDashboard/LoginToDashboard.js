// import { StartFunc as StartFuncShowData } from "./FetchFuncs/ShowData.js";
//import { StartFunc as ShowOnDomStartFunc } from "./ShowOnDom.js";
import { StartFunc as AddListenersStartFunc } from "./AddListeners.js";
import { StartFunc as CheckTokenStartFunc } from "../../AdminData/CheckToken.js";

let jVarGlobalTokenName = "KUMAToken";
let jVarGlobalUserKey = "KUMAUserName";
let jVarGlobalFirmKey = "FirmDetails";
let jVarGlobalModalId = "LoginModalId";
let jVarGlobalAdminSubRoute = "JSONUser";

let StartFunc = async () => {
    AddListenersStartFunc({
        inSubRoute: jVarGlobalAdminSubRoute,
        inUserKey: jVarGlobalUserKey,
        inFirmKey: jVarGlobalFirmKey,
        inTokenName: jVarGlobalTokenName,
        inModalId: jVarGlobalModalId
    });

    let LocalFromCheckToken = CheckTokenStartFunc({
        inUserKey: jVarGlobalUserKey,
        inFirmKey: jVarGlobalFirmKey,
        inTokenName: jVarGlobalTokenName
    });

    if (LocalFromCheckToken === false) {
        let jVarLocalId = jVarGlobalModalId;
        var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

        myModal.show();
    };
    //console.log("LocalFromCheckToken : ", LocalFromCheckToken);
    //  StartFuncShowData();
    // await ShowOnDomStartFunc();

};

StartFunc().then();