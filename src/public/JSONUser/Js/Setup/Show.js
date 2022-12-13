let jFSetup = async (inDataPk) => {
    let jVarLocalUrl = `/JSONUser/Users/Api/Setup/${inDataPk}`;
    let response = await fetch(jVarLocalUrl);
    let data = await response.json();

    if (data.KTF) {
        var myModal = new bootstrap.Modal(document.getElementById('SetupModal'), {
            keyboard: false
        });
        myModal.show();
    };
};
