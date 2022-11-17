let jFShowToDOM = () => {

    jFShowToDOMNameOfBranchId();

};

let jFShowToDOMNameOfNumberId = () => {
    let jVarLocalKey = "LANumber";
    let jVarLocalNumberId = document.getElementById("NumberId");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalNumberId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};

export {
    jFShowToDOM
};