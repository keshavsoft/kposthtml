let FetchFunc = async (inEvent) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;

    let jVarClosestInputGroup = jVarLocalCurrentTarget.closest(".input-group");

    let jVarLocalRoute = jVarGlobalProject;
    let jVarLocalSubRoute = jVarGlobalSubRoute;

    let jVarLocalReportSelected = jVarClosestInputGroup.querySelector(".ReportSelectedClass").value;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FirmDetails/ForReport`;
    let jVarLocalResult = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await jVarLocalResult.json();
    console.log("aaaaaaa : ", jVarLocalResponse);
};

export { FetchFunc };