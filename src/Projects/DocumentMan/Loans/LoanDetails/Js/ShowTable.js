import { StartFunc as ClickFuncStartFunc } from "./ClickFunc.js";

let FromHbs = async () => {
    let jVarLocalFetchHtml = "/DocumentMan/Loans/LoanDetails/LoanDetails.html"

    const response = await fetch(jVarLocalFetchHtml);
    const movies = await response.text();
    return await movies;

};


let StartFunc = async () => {
    let jVarLocalTbody = document.getElementById("LoanDetails");
    let jVarLocalHbas = await FromHbs();
    let jVarLocalData = await ClickFuncStartFunc();

    var template = Handlebars.compile(jVarLocalHbas);

    let jVarLocalTemplate = template(jVarLocalData);
    jVarLocalTbody.innerHTML = jVarLocalTemplate


};

export { StartFunc }
