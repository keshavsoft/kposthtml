import { StartFunc as AddListenersStartFunc } from "./AddListeners.js";

AddListenersStartFunc();

let jFShowReportDataFromInput = (inEvent) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;

    let jVarClosestInputGroup = jVarLocalCurrentTarget.closest(".input-group");
    let jVarLocalHtmlCardBody = document.querySelector(".TabPaneKCont1");

    let jVarLocalRoute = jVarGlobalProject;
    let jVarLocalSubRoute = jVarGlobalSubRoute;

    let jVarLocalReportSelected = jVarClosestInputGroup.querySelector(".ReportSelectedClass").value;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Reports/PullData/WithOutFilters/AsTable/DataWithConfig/${jVarLocalReportSelected}`;

    fetch(jVarLocalFetchUrl).then(response => {
        return response.json();
    }).then(FetchData => {
        if (FetchData !== null) {
            if (FetchData.KTF) {
                let jVarLocalJsonToDom = [];

                jVarLocalJsonToDom.push({
                    HTMLControlType: "Table",
                    KData: FetchData.DataFromServer.KData
                });

                let jVarLocalUUID = ForLocalStorageClass.jFInsertToLocalStorage({ inData: jVarLocalJsonToDom });

                jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(jVarLocalJsonToDom);

                jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
                    inData: jVarGlobalPresentViewData,
                    inHtmlParent: jVarLocalHtmlCardBody
                });

                jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.SetFocusFuncs.TableShow({ inHtmlParent: jVarLocalHtmlCardBody });
                jFShowFilterTable({ inUUID: jVarLocalUUID });
                jFShowColumnsInDropdown({ inUUID: jVarLocalUUID });
                //let jVarLocalCurrentTarget = event.currentTarget;
                let ConditionsButtonId = document.getElementById("ConditionsButtonId");
                ConditionsButtonId.dataset.uuid = jVarLocalUUID;
            };
        };
    });
};

let jFSortAfterFilter = ({ inData }) => {
    //return _.orderBy(inData, ['Date'], ['desc']);
    return _.orderBy(inData, ['Date']);
};

let jFConditionsShowData = (event) => {
    let jVarLocalFilteredTableId = document.getElementById("FilteredTableId");

    let jVarLocalColumnSelectedId = document.getElementById("ColumnSelectedId");
    let jVarLocalFromValueId = document.getElementById("FromValueId");
    let jVarLocalFromConditionId = document.getElementById("FromConditionId");
    let jVarLocalToValueId = document.getElementById("ToValueId");
    let jVarLocalToConditionId = document.getElementById("ToConditionId");

    let jVarLocalColumnSelected = jVarLocalColumnSelectedId.value;
    let jVarLocalFromValue = jVarLocalFromValueId.value;
    let jVarLocalFromCondition = jVarLocalFromConditionId.value;
    let jVarLocalToValue = jVarLocalToValueId.value;
    let jVarLocalToCondition = jVarLocalToConditionId.value;

    let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;

    let jVarLocalTableData = jVarLocalStorageDataAsJson[0].KData.TableData;

    if (jVarLocalFromCondition === ">=" && jVarLocalToCondition === "<=" && jVarLocalColumnSelected === "Date") {
        jVarLocalStorageDataAsJson[0].KData.TableData = jVarLocalTableData.filter(l1 => {
            return l1.Date >= jVarLocalFromValue && l1.Date <= jVarLocalToValue
        });
    };

    jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(jVarLocalStorageDataAsJson);

    jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
        inData: jVarGlobalPresentViewData,
        inHtmlParent: jVarLocalFilteredTableId
    });

};

// let jVarLocalFilerButton = document.getElementById("FiterDataId");
// jVarLocalFilerButton.addEventListener("click", (event) => {
//     let jVarLocalCurrentTarget = event.currentTarget;
//     console.log("sssssssssssssss",jVarLocalCurrentTarget);
// });