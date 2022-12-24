let FromLocalStorage = () => {
    let jVarLocalStorageKey = "FirmDetails";
    let jVarLocalStorageData = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalStorageDataAsJson = JSON.parse(jVarLocalStorageData);
    let jVarLocalFrimDetailsData = jVarLocalStorageDataAsJson.Firm;

    let jVarLocalAccountNameForPrint = document.getElementById("AccountNameForPrint");
    jVarLocalAccountNameForPrint.innerHTML = jVarLocalFrimDetailsData.FirmName;
};

export { FromLocalStorage };