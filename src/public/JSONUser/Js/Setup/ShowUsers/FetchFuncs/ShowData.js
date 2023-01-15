let StartFunc = async () => {
    let jVarLocalUrl = `/JSONUser/Users/Api/ShowUsers`;
    let response = await fetch(jVarLocalUrl);
    let data = await response.json();

    if (data.KTF) {
        LocalShowDataFunc({ inData: data.JSONObject });
    };
};

let LocalShowDataFunc = async ({ inData }) => {
    let jVarLocalRawTemplate = document.getElementById("HbsTemplateForBody").innerHTML;

    Object.entries(inData).forEach(
        ([key, value]) => {
            if (("UserName" in value) === false) {

                value.RowClass = "table-primary";
                value.ShowInsertNew = true;

            };
        }
    );

    let jVarGlobalPresentViewData = inData;
    document.getElementById("KTableBodyId").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(jVarGlobalPresentViewData);
};

export { StartFunc };