let StartFunc = ({ inDataToSave, inLoanRef }) => {
    console.log("aaaaaaaaa : ", inDataToSave, inLoanRef);
    let LocalNewData = { "Document": {} };

    if (inLoanRef in localStorage) {
        let LocalOldData = JSON.parse(localStorage.getItem(inLoanRef));
        LocalNewData = { ...LocalOldData };

        if ("Document" in LocalNewData) {
            LocalNewData.Document = { ...LocalNewData.Document, ...inDataToSave };
        } else {
            LocalNewData.Document = { ...inDataToSave };
        };

    } else {
        LocalNewData.Document = { ...inDataToSave }
    };

    localStorage.setItem(inLoanRef, JSON.stringify(LocalNewData));
};

let StartFunc_17nov2022 = ({ inDataToSave }) => {
    if ("Document" in localStorage) {
        let LocalOldData = localStorage.getItem("Document");
        let LocalNewData = { ...JSON.parse(LocalOldData), ...inDataToSave };
        localStorage.setItem("Document", JSON.stringify(LocalNewData));
    } else {
        localStorage.setItem("Document", JSON.stringify(inDataToSave));
    };
};

export { StartFunc }