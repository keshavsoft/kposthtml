let jFUpdateFunc = () => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("UpdateButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", jFLocalClickFunc)
    };
};

let jFLocalClickFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalDisplayName = jVarLocalColsestTr.querySelector('[name="DisplayName"]');
    let jVarLocalShowInTable = jVarLocalColsestTr.querySelector('[name="ShowInTable"]');
    let jVarLocalInsert = jVarLocalColsestTr.querySelector('[name="Insert"]');
    let jVarLocalCreateNew = jVarLocalColsestTr.querySelector('[name="CreateNew"]');
    let jVarLocalIsTextArea = jVarLocalColsestTr.querySelector('[name="IsTextArea"]');

    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalDisplayNameValue = jVarLocalDisplayName.value;
    let jVarLocalShowInTableValue = jVarLocalShowInTable.checked
    let jVarLocalInsertValue = jVarLocalInsert.checked
    let jVarLocalCreateNewValue = jVarLocalCreateNew.checked
    let jVarLocalIsTextAreaValue = jVarLocalIsTextArea.checked

    let BodyAsJson = {
        DisplayName: jVarLocalDisplayNameValue,
        ShowTable: jVarLocalShowInTableValue,
        Insert: jVarLocalInsertValue,
        CreateNew: jVarLocalCreateNewValue,
        IsTextArea: jVarLocalIsTextAreaValue
    }

    let jFetchUrl = "/JSONAdminApi/AdminApi/Config/TableColumns/Toggles";

    let response = await fetch(jFetchUrl, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            folderName: jVarLocalFolderName,
            FileName: jVarLocalfilename,
            ItemName: jVarLocalitemname,
            ScreenName: jVarLocalscreenname,
            DataAttribute: jVarLocalDataAttributeValue,
            BodyAsJson
        })
    });

    console.log("response : ", response.status);

    // .then(response => response.json()).then(dataFromApi => {
    //     let jVarLocalData = JSON.parse(dataFromApi);
    //     // console.log("jVarLocalData", jVarLocalData);

    // })
}


let jFLocalClickFunc1 = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalDisplayName = jVarLocalColsestTr.querySelector('[name="DisplayName"]');
    let jVarLocalShowInTable = jVarLocalColsestTr.querySelector('[name="ShowInTable"]');
    let jVarLocalInsert = jVarLocalColsestTr.querySelector('[name="Insert"]');
    let jVarLocalCreateNew = jVarLocalColsestTr.querySelector('[name="CreateNew"]');
    let jVarLocalIsTextArea = jVarLocalColsestTr.querySelector('[name="IsTextArea"]');

    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalDisplayNameValue = jVarLocalDisplayName.value;
    let jVarLocalShowInTableValue = jVarLocalShowInTable.checked
    let jVarLocalInsertValue = jVarLocalInsert.checked
    let jVarLocalCreateNewValue = jVarLocalCreateNew.checked
    let jVarLocalIsTextAreaValue = jVarLocalIsTextArea.checked


    let BodyAsJson = {
        DisplayName: jVarLocalDisplayNameValue,
        ShowTable: jVarLocalShowInTableValue,
        Insert: jVarLocalInsertValue,
        CreateNew: jVarLocalCreateNewValue,
        IsTextArea: jVarLocalIsTextAreaValue
    }

    // console.log("postDataKey", postDataKey);

    let jFetchUrl = "/JSONAdminApi/AdminApi/Config/TableColumns/Toggles"

    fetch(jFetchUrl, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            folderName: jVarLocalFolderName,
            FileName: jVarLocalfilename,
            ItemName: jVarLocalitemname,
            ScreenName: jVarLocalscreenname,
            DataAttribute: jVarLocalDataAttributeValue,
            BodyAsJson
        })
    }).then(response => response.json()).then(dataFromApi => {
        let jVarLocalData = JSON.parse(dataFromApi);
        // console.log("jVarLocalData", jVarLocalData);

    })
};

export { jFUpdateFunc };