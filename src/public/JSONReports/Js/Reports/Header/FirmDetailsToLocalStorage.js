let FetchFunc = async (inEvent) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;

    let jVarLocalRoute = jVarGlobalProject;
    let jVarLocalSubRoute = jVarGlobalSubRoute;

    let jVarLocalFetchUrl = `/JSONApi/${jVarLocalSubRoute}/Data/FromFolder/FirmDetails/ForReport`;
    let jVarLocalResult = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await jVarLocalResult.json();

    ToLocalStorage({ inData: jVarLocalResponse });
};

let ToLocalStorage = ({ inData }) => {
    let jVarLocalStorageKey = "FirmDetails";
    let jVarLocalStorageData = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalStorageDataAsJson = JSON.parse(jVarLocalStorageData);

    if ("Firm" in jVarLocalStorageDataAsJson) {

    } else {
        jVarLocalStorageDataAsJson.Firm = inData;
    };

    localStorage.setItem(jVarLocalStorageKey, JSON.stringify(jVarLocalStorageDataAsJson));
};

export { FetchFunc };