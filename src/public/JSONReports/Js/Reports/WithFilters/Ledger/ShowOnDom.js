let ReportDetails = ({ inAccountName }) => {
    let jVarLocalAccountNameForPrint = document.getElementById("AccountNameForPrint");
    jVarLocalAccountNameForPrint.innerHTML = inAccountName;
};

export { ReportDetails };