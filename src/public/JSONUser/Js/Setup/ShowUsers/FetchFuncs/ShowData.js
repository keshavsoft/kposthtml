let StartFunc = async () => {
    let jVarLocalUrl = `/JSONUser/Users/Api/ShowUsers`;
    let response = await fetch(jVarLocalUrl);
    let data = await response.json();
    console.log(data);

    // if (data.KTF) {
    //     var myModal = new bootstrap.Modal(document.getElementById('SetupModal'), {
    //         keyboard: false
    //     });
    //     myModal.show();
    // };
    ShowData({ data });
};
let ShowData = async ({ data }) => {
    let jVarLocalRawTemplate = document.getElementById("HbsTemplateForBody").innerHTML;
    let jVarGlobalPresentViewData = data.JSONObject;
    document.getElementById("KTableBodyId").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(jVarGlobalPresentViewData);
    ;
}

export { StartFunc };