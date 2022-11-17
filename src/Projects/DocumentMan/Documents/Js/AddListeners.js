import { SaveClickFunc as TableRowInsertFunc } from "./ClickFuncs.js";
import { FromHbs } from "./ShowTable.js";
import { PostFunc as FetchFuncsPostFunc } from "./FetchFuncs/ToServer/FromLocalStorage.js";

let StartFunc = () => {
    let jVarLocalsaveClick = document.getElementById("save");
    let jVarLocalFileToSaveClick = document.getElementById("InfileTosaveId");

    jVarLocalsaveClick.addEventListener("click", TableRowInsertFunc);
    jVarLocalFileToSaveClick.addEventListener("click", FetchFuncsPostFunc);

    document.addEventListener("DOMContentLoaded", FromHbs);
};

let StartFuncShow = async () => {
    let jVarLocalClassName = document.getElementsByClassName("ShowDocumentClass");

    for (let i = 0; i < jVarLocalClassName.length; i++) {
        jVarLocalClassName[i].addEventListener("click", function (event) {
            let jVarLocalCurrentTarget = event.currentTarget;
            let jvarFileName = jVarLocalCurrentTarget.dataset.filename;

            // document.location=`../Page/page1.html?LoanNumber=${jvarFileName}`;
            document.location = `../Page/page1Show.html?DocumentNumber=${jvarFileName}`


            console.log("llllllllllll--", jvarFileName);
        })
    };
};

export { StartFunc, StartFuncShow }
