let jFUpdateFunc = () => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("UpdateButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", jFLocalClickFunc)
    };
};
let jFLocalClickFunc = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDisplayName = jVarLocalColsestTr.querySelector('[name="DisplayName"]');
    let jVarLocalShowInTable = jVarLocalColsestTr.querySelector('[name="ShowInTable"]');
    let jVarLocalInsert = jVarLocalColsestTr.querySelector('[name="Insert"]');
    let jVarLocalCreateNew = jVarLocalColsestTr.querySelector('[name="CreateNew"]');
    let jVarLocalIsTextArea = jVarLocalColsestTr.querySelector('[name="IsTextArea"]');

    let jVarLocalDisplayNameValue = jVarLocalDisplayName.value;
    let jVarLocalShowInTableValue = jVarLocalShowInTable.checked
    let jVarLocalInsertValue = jVarLocalInsert.checked
    let jVarLocalCreateNewValue = jVarLocalCreateNew.checked
    let jVarLocalIsTextAreaValue = jVarLocalIsTextArea.checked


    let postDataKey = {
        infolderName: jVarLocalFolderName,
        inFileName: jVarLocalfilename,
        inItemName: jVarLocalitemname,
        inScreenName: jVarLocalscreenname,
        DisplayName: jVarLocalDisplayNameValue,
        ShowTable: jVarLocalShowInTableValue,
        Insert: jVarLocalInsertValue,
        CreateNew: jVarLocalCreateNewValue,
        IsTextArea: jVarLocalIsTextAreaValue
    }
    console.log("postDataKey",postDataKey);

};
export { jFUpdateFunc };