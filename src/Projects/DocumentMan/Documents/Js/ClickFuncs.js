import { StartFunc as ToLocalStorageStartFunc } from "./ToLocalStorage.js";
import { DocumentValidateFunc } from "./Validate.js";
import { ToTableBodyId as ShowOnDomToTableBodyId } from "./LocalStorageFuncs/PullData/ShowOnDom.js";
//import { FetchToSerVer as LocalPostToServerWithFileFetchToSerVer } from "./FetchFuncs/ToServer/FromLocalStorage.js";

let SaveClickFunc = async (event) => {
    let jVarLocalFromValidate = await DocumentValidateFunc();

    if (jVarLocalFromValidate.KTF) {
        let jVarLocalTableBodyId = document.getElementById("TableBodyId");
        let jVarLocalInputFileName = document.getElementById("InPutFileName");


        let jVarLocalDocumentNo = document.getElementById("DocumentId").value;
        let jVarLocalDocumentDate = document.getElementById("DocumentDateId").value;
        let jVarLocalNatureDocument = document.getElementById("NatureDocumentId").value;
        let jVarLocalCopyXerox = document.getElementById("CopyXeroxId").value;
        let jVarLocalPageNo = document.getElementById("PageNoId").value;

        let saveData = {};

        saveData[jVarLocalTableBodyId.rows.length + 1] = {
            DocumentNo: jVarLocalDocumentNo,
            DocumentDate: jVarLocalDocumentDate,
            NatureDocument: jVarLocalNatureDocument,
            CopyXerox: jVarLocalCopyXerox,
            PageNo: jVarLocalPageNo
        };

        ToLocalStorageStartFunc({
            inDataToSave: saveData,
            inLoanRef: jVarLocalInputFileName.value
        });

        ShowOnDomToTableBodyId({ inLoanRef: jVarLocalInputFileName.value });
      
        // LocalPostToServerWithFileFetchToSerVer({InFileName:jVarLocalInputFileName.value

        // });

        // window.location.href = "";
        // await LocalPostToServer();
        //await LocalPostToServerWithFile({ InFileName: jVarLocalInputFileName })
        console.log("jVarLocalFromValidate:------");
    };
};

let LocalPostToServer = async ({ }) => {
    let jVarLocalFetchUrl = "/DocumentMan/Documents";
    let jVarLocalData = localStorage.getItem("Document");
    console.log("jVarLocalData : ", jVarLocalData);
    let LocalSaveData = JSON.parse(jVarLocalData)
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ InToSAve: LocalSaveData })
    };

    let response = await fetch(jVarLocalFetchUrl, settings);
    let data = await response.text();
    console.log("ssssssssss : ", data);
    //return data;
};

let LocalPostToServerWithFile = async ({ InFileName }) => {
    let jVarLocalFetchUrl = "/DocumentMan/LoanDetails/Save";
    let jVarLocalData = localStorage.getItem("Document");
    console.log("jVarLocalData : ", jVarLocalData);
    let LocalSaveData = JSON.parse(jVarLocalData)
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ InToSAve: LocalSaveData, InFileName })
    };

    let response = await fetch(jVarLocalFetchUrl, settings);
    let data = await response.text();
    console.log("ssssssssss : ", data);
    //return data;
};

export { SaveClickFunc }