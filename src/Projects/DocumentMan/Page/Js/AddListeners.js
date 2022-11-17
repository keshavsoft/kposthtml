import {
    jFClickDate, jFClickBranchId, 
    jFClickNumberId, jFClickNameId, 
    jFClickPurposeId, jFClickName1Id,
    jFClickName2Id, jFClickVillageId, 
    jFClickLandId, jFClickName3Id, 
    jFClickServeyNo1, jFClickServeyNo2, 
    jFClickServeyNo3, jFClickServeyNo4,
    jFClickServeyNoTotal
} from "./ClickFuncs.js";
import { FetchPost as SaveFuncsFetchPost } from "./SaveFuncs.js";


let jFAddListeners = () => {
    let jVarLocalDate = document.getElementById("DateId");
    jVarLocalDate.addEventListener("click", jFClickDate);

    let jVarLocalBranchId = document.getElementById("BranchId");
    jVarLocalBranchId.addEventListener("click", jFClickBranchId);

    let jVarLocalNameId = document.getElementById("NameId");
    jVarLocalNameId.addEventListener("click", jFClickNameId);

    let jVarLocalNumberId = document.getElementById("NumberId");
    jVarLocalNumberId.addEventListener("click", jFClickNumberId);


    let jVarLocalPurposeId = document.getElementById("PurposeId");
    jVarLocalPurposeId.addEventListener("click", jFClickPurposeId);

    let jVarLocalName1Id = document.getElementById("Name1Id");
    jVarLocalName1Id.addEventListener("click", jFClickName1Id);

    let jVarLocalName2Id = document.getElementById("Name2Id");
    jVarLocalName2Id.addEventListener("click", jFClickName2Id);

    let jVarLocalVillageId = document.getElementById("VillageId");
    jVarLocalVillageId.addEventListener("click", jFClickVillageId);

    let jVarLocalLandId = document.getElementById("LandId");
    jVarLocalLandId.addEventListener("click", jFClickLandId);

    let jVarLocalName3Id = document.getElementById("Name3Id");
    jVarLocalName3Id.addEventListener("click", jFClickName3Id);

    let jVarLocalServeyNo1 = document.getElementById("ServeyNo1");
    jVarLocalServeyNo1.addEventListener("click", jFClickServeyNo1);

    let jVarLocalServeyNo2 = document.getElementById("ServeyNo2");
    jVarLocalServeyNo2.addEventListener("click", jFClickServeyNo2);

    let jVarLocalServeyNo3 = document.getElementById("ServeyNo3");
    jVarLocalServeyNo3.addEventListener("click", jFClickServeyNo3);

    let jVarLocalServeyNo4 = document.getElementById("ServeyNo4");
    jVarLocalServeyNo4.addEventListener("click", jFClickServeyNo4);

    let jVarLocalServeyNoTotal = document.getElementById("ServeyNoTotal");
    jVarLocalServeyNoTotal.addEventListener("click", jFClickServeyNoTotal);


    let jVarLocalSave = document.getElementById("PageSave");
    jVarLocalSave.addEventListener("click", SaveFuncsFetchPost);



};



export { jFAddListeners }
