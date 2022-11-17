import { ReturnLoanNumber } from "./Js/urlSearchParams.js";
import { FetchPost as PullDataFetchPost } from "./Js/PullData.js";
import { jFShowToDOM } from "./Js/ShowData.js";
import { FromHbs } from "./Js/ShowTable.js";

document.addEventListener("DOMContentLoaded", FromHbs);

let jVarLocalLoanNumber = ReturnLoanNumber();

if (jVarLocalLoanNumber > 0) {
    PullDataFetchPost({ inLoanNumber: `${jVarLocalLoanNumber}.json` }).then((promisedata) => {
        console.log("promisedata", promisedata);
        FromHbs();
    });
};
