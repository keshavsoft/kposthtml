import { getAll as FromLoansgetAll } from "./Js/FromLoans/ShowLoans.js";
import { StartFunc as AddListenersStartFunc } from "./Js/AddListeners.js";

//let jVarLocalLoanNumber = ReturnLoanNumber();

FromLoansgetAll().then(PromiseData => {
    let Datalist = '';
    
    PromiseData.forEach((ListItems) => {
        Datalist += '<option value="' + ListItems + '" />';
    });

    document.getElementById("DocumentList").innerHTML = Datalist;
});

AddListenersStartFunc();