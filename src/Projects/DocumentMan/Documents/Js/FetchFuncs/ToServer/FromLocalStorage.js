let PostFunc = async ({ InFileName }) => {
    let jVarLocalInputFileName = document.getElementById("InPutFileName");
    let jVarLocalLoanRef = jVarLocalInputFileName.value;

    // let jVarLocalFetchUrl = "/DocumentMan/LoanDetails/Save";
    let jVarLocalFetchUrl = `/DocumentMan/DocumentDetails/Insert/${jVarLocalLoanRef}`;

    //let jVarLocalData = localStorage.getItem(InFileName);
    let LocalSaveData = LocalPrepareBodyData({ inLoanRef: jVarLocalLoanRef });
    console.log("LocalSaveData : ", LocalSaveData);
    const settings = {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(LocalSaveData)
    };

    let response = await fetch(jVarLocalFetchUrl, settings);
    let data = await response.text();
    //return data;
};

let PostFunc_17nov2022 = async ({ InFileName }) => {

    // let jVarLocalFetchUrl = "/DocumentMan/LoanDetails/Save";
    let jVarLocalFetchUrl = "/DocumentMan/DocumentDetails/Insert";

    let jVarLocalData = localStorage.getItem(InFileName);
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
    //return data;
};

let LocalPrepareBodyData = ({ inLoanRef }) => {

    let jVarLocalData = localStorage.getItem(inLoanRef);
    console.log("jVarLocalData : ", JSON.parse(jVarLocalData));
    return JSON.parse(jVarLocalData).Document;
};

export { PostFunc }