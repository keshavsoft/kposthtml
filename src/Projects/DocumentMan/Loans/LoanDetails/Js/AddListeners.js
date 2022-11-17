import {StartFunc as ShowTableStartFunc  } from "./ShowTable.js";

let StartFunc = () => {
    let jVarLocalButtonId = document.getElementById("ButtonId");

    jVarLocalButtonId.addEventListener("click",ShowTableStartFunc)
};


export { StartFunc }
