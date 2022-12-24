let FetchFunc = async (inEvent) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;

    let jVarLocalRoute = jVarGlobalProject;
    let jVarLocalSubRoute = jVarGlobalSubRoute;

    let jVarLocalFetchUrl = `/JSONApi/${jVarLocalSubRoute}/Data/FromFolder/FirmDetails/ForReport`;
    let jVarLocalResult = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await jVarLocalResult.json();
    console.log("aaaaaaa : ", jVarLocalResponse);
};

export { FetchFunc };