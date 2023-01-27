import { StartFunc as AdminDataStartFunc } from "../../AdminData/AddListeners.js";
import { StartFunc as ButtonClicksStartFunc } from "./ListenerFuncs/ButtonClicks.js";

let StartFunc = ({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId }) => {
    AdminDataStartFunc({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId });
    ButtonClicksStartFunc({ inSubRoute, inUserKey, inFirmKey, inTokenName, inModalId });

    // var userSelection = document.querySelectorAll('.LoginButtonClass');
    // console.log("userSelection : ", userSelection);
    // for (let i = 0; i < userSelection.length; i++) {
    //     userSelection[i].addEventListener("click", LocalButtonClickFunc);
    // }
};

export { StartFunc }
