// import { StartFunc as StartFuncShowData } from "./FetchFuncs/ShowData.js";
import { StartFunc as ShowOnDomStartFunc } from "./ShowOnDom.js";
import { StartFunc as AddListenersStartFunc } from "./AddListeners.js";
import { StartFunc as CheckTokenStartFunc } from "../../AdminData/CheckToken.js";
import { StartFunc as AddListenersPostShowDataStartFunc } from "./AddListenersPostShowData.js";

let jVarGlobalTokenName = "KUMAToken";
let jVarGlobalUserKey = "KUMAUserName";
let jVarGlobalFirmKey = "FirmDetails";
let jVarGlobalModalId = "LoginModalId";
let jVarGlobalAdminSubRoute = "JSONUser";
let jVarGlobalUserLocalStorageKey = "kUserName";
let jVarGlobalFirmDetailsLocalStorageKey = "FirmDetails";

let StartFunc = async () => {
    //  console.log("StartFunc : ");
    AddListenersStartFunc({
        inSubRoute: jVarGlobalAdminSubRoute,
        inUserKey: jVarGlobalUserKey,
        inFirmKey: jVarGlobalFirmKey,
        inTokenName: jVarGlobalTokenName,
        inModalId: jVarGlobalModalId
    });

    CheckTokenStartFunc({
        inUserKey: jVarGlobalUserKey,
        inFirmKey: jVarGlobalFirmKey,
        inTokenName: jVarGlobalTokenName,
        inModalId: jVarGlobalModalId
    });
    //  console.log("LocalFromCheckToken : ", LocalFromCheckToken);
    // if (LocalFromCheckToken === false) {
    //     let jVarLocalId = jVarGlobalModalId;
    //     var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });
    //    // console.log("myModal : ", myModal);
    //     myModal.show();
    // };
    //console.log("LocalFromCheckToken : ", LocalFromCheckToken);
    //  StartFuncShowData();
    await ShowOnDomStartFunc();

    AddListenersPostShowDataStartFunc({
        inUserLocalStorageKey: jVarGlobalUserLocalStorageKey,
        inFirmDetailsLocalStorageKey: jVarGlobalFirmDetailsLocalStorageKey
    });

};

StartFunc().then();