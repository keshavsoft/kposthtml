
let jFFilterData = ({ inEvent }) => {
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

    jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(jVarLocalNewData);

    jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
        inData: jVarGlobalPresentViewData,
        inHtmlParent: jVarLocalFilteredTableId
    });
};


let jFShowFilterTable = ({ inUUID }) => {
    let jVarLocalTemplateNewTab = document.getElementById("FilterTableRow");
    let jVarLocalFilterTableBody = document.getElementById("FilterTableBody");
    let jVarLocalStorageData = localStorage.getItem(inUUID);
    let jVarLocalStorageDataAsJson = JSON.parse(jVarLocalStorageData);

    let jVarLocalTableColumns = jVarLocalStorageDataAsJson[0].KData.TableColumns;

    jVarLocalTableColumns.forEach((element, LoopIndex) => {
        console.log("element : ", element);
        let jVarLocalHTMLContent = Handlebars.compile(jVarLocalTemplateNewTab.innerHTML)({
            Name: element.DisplayName,
            SNo: LoopIndex + 1,
            DataAttribute: element.DataAttribute,
            UUID: inUUID
        });

        //jVarLocalFilterTableBody.insertAdjacentElement("beforebegin",jVarLocalHTMLContent);
        jVarLocalFilterTableBody.insertAdjacentHTML("beforeend", jVarLocalHTMLContent);
    });
};

let jFShowColumnsInDropdown = ({ inUUID }) => {
    let jVarLocalStorageData = localStorage.getItem(inUUID);
    let jVarLocalStorageDataAsJson = JSON.parse(jVarLocalStorageData);

    let jVarLocalTableColumns = jVarLocalStorageDataAsJson[0].KData.TableColumns;

    let str = '';

    jVarLocalTableColumns.forEach((name) => {
        str += '<option value="' + name.DisplayName + '" />';
    });

    document.getElementById("ColumnsList").innerHTML = str;
};

let jFConditionsShowData = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalUUID = jVarLocalCurrentTarget.dataset.uuid;

    //let jVarLocalHtmlCardBody = document.querySelector(".TabPaneKCont1");
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

    let jVarLocalStorageData = localStorage.getItem(jVarLocalUUID);
    let jVarLocalStorageDataAsJson = JSON.parse(jVarLocalStorageData);

    let jVarLocalTableData = jVarLocalStorageDataAsJson[0].KData.TableData;

    if (jVarLocalFromCondition === ">=" && jVarLocalToCondition === "<=" && jVarLocalColumnSelected === "Date") {
        jVarLocalStorageDataAsJson[0].KData.TableData = jVarLocalTableData.filter(l1 => {
            return l1.Date >= jVarLocalFromValue && l1.Date <= jVarLocalToValue
        });
    };

    //jVarLocalStorageDataAsJson[0].KData.TableData = jVarLocalTableData.filter(l1 => { return l1.Date <= "2022-07-15" })
    //    jVarLocalStorageDataAsJson[0].KData.TableData = jVarLocalTableData.filter(l1 => { return l1.Date >= jVarLocalFromValue });

    //let jVarLocalFilteredData = jVarLocalTableData.filter(l1 => { return l1.Date <= "2022-07-15" })

    jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(jVarLocalStorageDataAsJson);

    jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
        inData: jVarGlobalPresentViewData,
        inHtmlParent: jVarLocalFilteredTableId
    });

};