let DocumentValidateFunc = async () => {
    let jVarLocalReturnObject = { KTF: false, KResult: {} };

    let jVarLocalFormCreate = document.getElementById("FormCreate");

    jVarLocalFormCreate.classList.add('was-validated');

    if (jVarLocalFormCreate.checkValidity() === false) {
        LocalSetFocus({ inHtmControlToSearch: jVarLocalFormCreate });

        jVarLocalReturnObject.KReason = "Form not validated!";
        return await jVarLocalReturnObject;
    };

    jVarLocalReturnObject.KTF = true;
    return await jVarLocalReturnObject;

};

let LocalSetFocus = ({ inHtmControlToSearch }) => {
    console.log("inHtmControlToSearch--",inHtmControlToSearch);
    let jVarLocalRequired = inHtmControlToSearch.querySelectorAll("input");

    for (let i = 0; i < jVarLocalRequired.length; i++) {
        if (jVarLocalRequired[i].validity.valid === false) {
            jVarLocalRequired[i].focus();
            i = jVarLocalRequired.length + 1;
        };
    };
};




export { DocumentValidateFunc }