// import { FromLocalStorage } from "./ShowHeader.js";
// import { ReportDetails } from "./ShowOnDom.js";
//FilterTableBody

let jFConditionsShowData = ({ inData }) => {
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

    let jVarLocalStorageDataAsJson = inData;

    let jVarLocalTableData = jVarLocalStorageDataAsJson[0].KData.TableData;

    if (jVarLocalFromCondition === ">=" && jVarLocalToCondition === "<=" && jVarLocalColumnSelected === "Date") {
        jVarLocalStorageDataAsJson[0].KData.TableData = jVarLocalTableData.filter(l1 => {
            return l1.Date >= jVarLocalFromValue && l1.Date <= jVarLocalToValue
        });
    };

    return jVarLocalStorageDataAsJson;

    // jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(jVarLocalStorageDataAsJson);

    // jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
    //     inData: jVarGlobalPresentViewData,
    //     inHtmlParent: jVarLocalFilteredTableId
    // });

};

let LocalShowData = () => {
    let jVarLocalFilterObject = {};
    let jVarLocalFilterTableBody = document.getElementById("FilterTableBody");
    let jVarCheckBoxes = jVarLocalFilterTableBody.querySelectorAll('input[type="checkbox"]:checked');

    for (let i = 0; i < jVarCheckBoxes.length; i++) {
        let jVarLoopInsideClosestTr = jVarCheckBoxes[i].closest("tr");
        let jVarLoopInsideSearchInput = jVarLoopInsideClosestTr.querySelector(".SearchInput");
        let jVarLocalFilterKey = jVarLoopInsideSearchInput.dataset.dataattribute;
        jVarLocalFilterObject[jVarLocalFilterKey] = jVarLoopInsideSearchInput.value;
    };

    let jVarLocalNewData = JSON.parse(JSON.stringify(jVarGlobalPresentViewData));

    let jVarlocalTableData = jVarLocalNewData[0].KData.TableData;
    let jVarLocalFilteredTableId = document.getElementById("FilteredTableId");

    jVarLocalNewData[0].KData.TableData = _.filter(jVarlocalTableData, jVarLocalFilterObject);

    // jVarLocalNewData[0].KData.TableData = jFSortAfterFilter({ inData: jVarLocalNewData[0].KData.TableData });

    let jVarLocalFromCondition = jFConditionsShowData({ inData: jVarLocalNewData });

    let jVarLocalToShowData = KeshavSoftCrud.BuildFromArray(jVarLocalFromCondition);

    jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
        inData: jVarLocalToShowData,
        inHtmlParent: jVarLocalFilteredTableId
    });

    //"input[name^='item[']:checked"

};

let jFFilterData = ({ inEvent }) => {
    let jVarLocalcurrentTarget = inEvent.currentTarget;
    let jVarClosestRow = jVarLocalcurrentTarget.closest("tr");
    let jVarToFilterInput = jVarClosestRow.querySelector(".SearchInput");
    let jVarLocalFilterValue = jVarToFilterInput.value;
    let jVarLocalFilterKey = jVarLocalcurrentTarget.dataset.dataattribute;

    let jVarLocalNewData = jVarGlobalPresentViewData;

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
};


let jFShowFilterTable = () => {
    let jVarLocalTemplateNewTab = document.getElementById("FilterTableRow");
    let jVarLocalFilterTableBody = document.getElementById("FilterTableBody");
    //   let jVarLocalStorageData = localStorage.getItem(inUUID);
    //let jVarLocalStorageDataAsJson = JSON.parse(jVarLocalStorageData);
    let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;

    let jVarLocalTableColumns = jVarLocalStorageDataAsJson[0].KData.TableColumns;

    jVarLocalTableColumns.forEach((element, LoopIndex) => {
        let jVarLocalHTMLContent = Handlebars.compile(jVarLocalTemplateNewTab.innerHTML)({
            Name: element.DisplayName,
            SNo: LoopIndex + 1,
            DataAttribute: element.DataAttribute
        });

        //jVarLocalFilterTableBody.insertAdjacentElement("beforebegin",jVarLocalHTMLContent);
        jVarLocalFilterTableBody.insertAdjacentHTML("beforeend", jVarLocalHTMLContent);
    });
};


let jFShowColumnsInDropdown = () => {
    //  let jVarLocalStorageData = localStorage.getItem(inUUID);
    //let jVarLocalStorageDataAsJson = JSON.parse(jVarLocalStorageData);
    let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;

    let jVarLocalTableColumns = jVarLocalStorageDataAsJson[0].KData.TableColumns;

    let str = '';

    jVarLocalTableColumns.forEach((name) => {
        str += '<option value="' + name.DisplayName + '" />';
    });

    document.getElementById("ColumnsList").innerHTML = str;
};

let jFFillDataListForFilters = () => {
    //let jVarLocalStorageData = localStorage.getItem(inUUID);
    //    let jVarLocalStorageDataAsJson = JSON.parse(jVarLocalStorageData);

    let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;

    let jVarLocalTableColumns = jVarLocalStorageDataAsJson[0].KData.TableColumns;
    let jVarLocalTableData = jVarLocalStorageDataAsJson[0].KData.TableData;

    jVarLocalTableColumns.forEach((element, LoopIndex) => {
        let LoopInsideDataListId = document.getElementById(`DataListForFilter-${LoopIndex + 1}`);
        let LoopInsideFilter = _.keys(_.groupBy(jVarLocalTableData, element.DataAttribute));

        let str = '';

        LoopInsideFilter.forEach((name) => {
            str += '<option value="' + name + '" />';
        });

        LoopInsideDataListId.innerHTML = str;
    });
};

let jFPullFromServerInsertToLocalStorage = (inEvent) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;

    let jVarClosestInputGroup = jVarLocalCurrentTarget.closest(".input-group");

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

                jVarGlobalPresentViewData = jVarLocalJsonToDom;

                // let jVarLocalUUID = ForLocalStorageClass.jFInsertToLocalStorage({ inData: jVarLocalJsonToDom });
                // let ConditionsButtonId = document.getElementById("ConditionsButtonId");
                // ConditionsButtonId.dataset.uuid = jVarLocalUUID;

                jFShowFilterTable();
                jFShowColumnsInDropdown();
                jFFillDataListForFilters();
            };
        };
    });
};


let StartFunc = () => {

    let jVarLocalFilerButton = document.getElementById("FiterDataId");
    jVarLocalFilerButton.addEventListener("click", LocalShowData);

    let jVarLocalReportButtonId = document.getElementById("ReportButtonId");
    jVarLocalReportButtonId.addEventListener("click", jFPullFromServerInsertToLocalStorage);

    // let jVarLocalReportButtonId = document.getElementById("ReportButtonId");

    // jVarLocalReportButtonId.addEventListener("click", jFLocalPullFromServerInsertToLocalStorage);

};

// let jFLocalFilterData = (inEvent) => {
//     let jVarLocalcurrentTarget = inEvent.currentTarget;

//     let jVarClosestRow = jVarLocalcurrentTarget.closest("tr");
//     let jVarToFilterInput = jVarClosestRow.querySelector(".SearchInput");
//     let jVarLocalFilterValue = jVarToFilterInput.value;
//     let jVarLocalFilterKey = jVarLocalcurrentTarget.dataset.dataattribute;
//     let jVarLocalUUIDNeeded = jVarLocalcurrentTarget.dataset.uuid;
//     let jVarLocalStorageData = localStorage.getItem(jVarLocalUUIDNeeded);
//     let jVarLocalNewData = jVarGlobalPresentViewData;

//     let jVarlocalTableData = jVarLocalNewData[0].KData.TableData;
//     let jVarLocalFilteredTableId = document.getElementById("FilteredTableId");
//     let jVarLocalFilterObject = {};
//     jVarLocalFilterObject[jVarLocalFilterKey] = jVarLocalFilterValue;

//     jVarLocalNewData[0].KData.TableData = _.filter(jVarlocalTableData, jVarLocalFilterObject);

//     jVarLocalNewData[0].KData.TableData = jFSortAfterFilter({ inData: jVarLocalNewData[0].KData.TableData });

//     jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(jVarLocalNewData);

//     jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
//         inData: jVarGlobalPresentViewData,
//         inHtmlParent: jVarLocalFilteredTableId
//     });

//     ReportDetails({ inAccountName: jVarLocalFilterValue });
// };

// let jFLocalPullFromServerInsertToLocalStorage = (inEvent) => {
//     let jVarLocalCurrentTarget = inEvent.currentTarget;

//     let jVarClosestInputGroup = jVarLocalCurrentTarget.closest(".input-group");

//     FromLocalStorage();

//     let jVarLocalRoute = jVarGlobalProject;
//     let jVarLocalSubRoute = jVarGlobalSubRoute;

//     let jVarLocalReportSelected = jVarClosestInputGroup.querySelector(".ReportSelectedClass").value;

//     let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Reports/PullData/WithOutFilters/AsTable/DataWithConfig/${jVarLocalReportSelected}`;

//     fetch(jVarLocalFetchUrl).then(response => {
//         return response.json();
//     }).then(FetchData => {
//         if (FetchData !== null) {
//             if (FetchData.KTF) {
//                 let jVarLocalJsonToDom = [];

//                 jVarLocalJsonToDom.push({
//                     HTMLControlType: "ReportTableForPrint",
//                     KData: FetchData.DataFromServer.KData
//                 });
//                 jVarGlobalPresentViewData = jVarLocalJsonToDom;

//                 //   let jVarLocalUUID = ForLocalStorageClass.jFInsertToLocalStorage({ inData: jVarLocalJsonToDom });

//                 jFShowFilterTable({ inUUID: "" });
//                 //  jFShowColumnsInDropdown({ inUUID: jVarLocalUUID });
//                 jFFillDataListForFilters({ inUUID: "" });

//                 let jVarLocalFilterButtonClass = document.querySelectorAll(".FilterButtonClass");

//                 for (let i = 0; i < jVarLocalFilterButtonClass.length; i++) {
//                     jVarLocalFilterButtonClass[i].addEventListener("click", jFLocalFilterData);
//                 };
//             };
//         };
//     });
// };

export { StartFunc }