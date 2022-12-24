import { FromLocalStorage } from "./ShowHeader.js";
import { ReportDetails } from "./ShowOnDom.js";

let jFStartFunc = () => {
    let jVarLocalReportButtonId = document.getElementById("ReportButtonId");

    jVarLocalReportButtonId.addEventListener("click", jFLocalPullFromServerInsertToLocalStorage);
};

let jFLocalFilterData = (inEvent) => {
    let jVarLocalcurrentTarget = inEvent.currentTarget;

    let jVarClosestRow = jVarLocalcurrentTarget.closest("tr");
    let jVarToFilterInput = jVarClosestRow.querySelector(".SearchInput");
    let jVarLocalFilterValue = jVarToFilterInput.value;
    let jVarLocalFilterKey = jVarLocalcurrentTarget.dataset.dataattribute;
    let jVarLocalUUIDNeeded = jVarLocalcurrentTarget.dataset.uuid;
    let jVarLocalStorageData = localStorage.getItem(jVarLocalUUIDNeeded);
    let jVarLocalNewData = JSON.parse(jVarLocalStorageData);

    let jVarlocalTableData = jVarLocalNewData[0].KData.TableData;
    let jVarLocalFilteredTableId = document.getElementById("FilteredTableId");
    let jVarLocalFilterObject = {};
    jVarLocalFilterObject[jVarLocalFilterKey] = jVarLocalFilterValue;

    jVarLocalNewData[0].KData.TableData = _.filter(jVarlocalTableData, jVarLocalFilterObject);

    jVarLocalNewData[0].KData.TableData = jFSortAfterFilter({ inData: jVarLocalNewData[0].KData.TableData });

    jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(jVarLocalNewData);

    jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
        inData: jVarGlobalPresentViewData,
        inHtmlParent: jVarLocalFilteredTableId
    });

    ReportDetails({ inAccountName: jVarLocalFilterValue });
};

let jFLocalPullFromServerInsertToLocalStorage = (inEvent) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;

    let jVarClosestInputGroup = jVarLocalCurrentTarget.closest(".input-group");

    FromLocalStorage();

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
                    HTMLControlType: "ReportTableForPrint",
                    KData: FetchData.DataFromServer.KData
                });

                let jVarLocalUUID = ForLocalStorageClass.jFInsertToLocalStorage({ inData: jVarLocalJsonToDom });

                jFShowFilterTable({ inUUID: jVarLocalUUID });
                //  jFShowColumnsInDropdown({ inUUID: jVarLocalUUID });
                jFFillDataListForFilters({ inUUID: jVarLocalUUID });

                let jVarLocalFilterButtonClass = document.querySelectorAll(".FilterButtonClass");

                for (let i = 0; i < jVarLocalFilterButtonClass.length; i++) {
                    jVarLocalFilterButtonClass[i].addEventListener("click", jFLocalFilterData);
                };
            };
        };
    });
};

jFStartFunc();