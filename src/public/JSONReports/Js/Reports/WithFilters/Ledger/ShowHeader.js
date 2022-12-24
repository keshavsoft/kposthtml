let FromLocalStorage = () => {
    let jVarLocalStorageKey = "FirmDetails";
    let jVarLocalStorageData = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalStorageDataAsJson = JSON.parse(jVarLocalStorageData);

    if ("Firm" in jVarLocalStorageDataAsJson) {
        let jVarLocalFrimDetailsData = jVarLocalStorageDataAsJson.Firm;

        if ("FirmName" in jVarLocalFrimDetailsData) {
            let jVarLocalReportFirmNameId = document.getElementById("ReportFirmNameId");
            jVarLocalReportFirmNameId.innerHTML = jVarLocalFrimDetailsData.FirmName;

            let jVarLocalPeriodId = document.getElementById("PeriodId");
            jVarLocalPeriodId.innerHTML = jVarLocalFrimDetailsData.FromDate;

            let jVarLocalPANId = document.getElementById("PANId");
            jVarLocalPANId.innerHTML = jVarLocalFrimDetailsData.PAN;

            let jVarLocalAssYearId = document.getElementById("AssYearId");
            jVarLocalAssYearId.innerHTML = jVarLocalFrimDetailsData.AssYear;

            let jVarLocalFinYearId = document.getElementById("FinYearId");
            jVarLocalFinYearId.innerHTML = jVarLocalFrimDetailsData.FinYear;

            let jVarLocalReportSelectedId = document.getElementById("ReportSelectedId");
            let jVarLocalReportNameForPrint = document.getElementById("ReportNameForPrint");

            jVarLocalReportNameForPrint.innerHTML = jVarLocalReportSelectedId.value;
        } else {
            console.log("FirmName not found in Localstorage!");
        };
    } else {
        console.log("Firm not found in Localstorage!");
    };
};

export { FromLocalStorage };