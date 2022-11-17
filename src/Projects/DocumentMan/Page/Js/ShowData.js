let jFShowToDOM = () => {

    jFShowToDOMNameOfDate()
    jFShowToDOMNameOfBranchId();
    jFShowToDOMNameOfPACA();
    jFShowToDOMNameOfNumberId();
    jFShowToDOMNameOfPurposeId();
    jFShowToDOMNameOfName3Id();
    jFShowToDOMNameOfLandId();
    jFShowToDOMNameOfVillageId();
    jFShowToDOMNameOfName2Id();
    jFShowToDOMNameOfName1();
    jFShowToDOMNameOfServeyNo1();
    jFShowToDOMNameOfServeyNo2();
    jFShowToDOMNameOfServeyNo3();
    jFShowToDOMNameOfServeyNo4();
    jFShowToDOMNameOfServeyNoTotal();

};

let jFShowToDOMNameOfDate = () => {
    let jVarLocalKey = "DocumentDate";
    let jVarLocalDate = document.getElementById("DateId");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalDate.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};

let jFShowToDOMNameOfNumberId = () => {
    let jVarLocalKey = "LANumber";
    let jVarLocalNumberId = document.getElementById("NumberId");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalNumberId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfPurposeId = () => {
    let jVarLocalKey = "Purpose";
    let jVarLocalPurposeId = document.getElementById("PurposeId");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalPurposeId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfVillageId = () => {
    let jVarLocalKey = "Village";
    let jVarLocalVillage = document.getElementById("VillageId");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalVillage.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfName2Id = () => {
    let jVarLocalKey = "Name2Id";
    let jVarLocalName2Id = document.getElementById("Name2Id");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalName2Id.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfLandId = () => {
    let jVarLocalKey = "Land";
    let jVarLocalLand = document.getElementById("LandId");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalLand.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfBranchId = () => {
    let jVarLocalKey = "BranchId";
    let jVarLocalBranchId = document.getElementById(jVarLocalKey);

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalBranchId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfPACA = () => {
    let jVarLocalKey = "NameOfPACA";
    let jVarLocalNameId = document.getElementById("NameId");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalNameId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfName1 = () => {
    let jVarLocalKey = "Name1";
    let jVarLocalName1 = document.getElementById("Name1Id");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalName1.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfName3Id = () => {
    let jVarLocalKey = "Name3";
    let jVarLocalName3Id = document.getElementById("Name3Id");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalName3Id.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];
};
let jFShowToDOMNameOfServeyNo1 = () => {
    let jVarLocalKey = "ServeyNo1";
    let jVarLocalName3Id = document.getElementById("ServeyNo1");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalName3Id.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];
};
let jFShowToDOMNameOfServeyNo2 = () => {
    let jVarLocalKey = "ServeyNo2";
    let jVarLocalName3Id = document.getElementById("ServeyNo2");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalName3Id.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];
};
let jFShowToDOMNameOfServeyNo3 = () => {
    let jVarLocalKey = "ServeyNo3";
    let jVarLocalName3Id = document.getElementById("ServeyNo3");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalName3Id.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];
};
let jFShowToDOMNameOfServeyNo4 = () => {
    let jVarLocalKey = "ServeyNo4";
    let jVarLocalName3Id = document.getElementById("ServeyNo4");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalName3Id.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];
};
let jFShowToDOMNameOfServeyNoTotal = () => {
    let jVarLocalKey = "ServeyNoTotal";
    let jVarLocalName3Id = document.getElementById("ServeyNoTotal");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalName3Id.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];
};


export {
    jFShowToDOM
};