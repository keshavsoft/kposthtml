let StartFunc = async () => {
    let jVarLocalClassName = document.getElementsByClassName("ShowButtonClass");

    for (let i = 0; i < jVarLocalClassName.length; i++) {
        jVarLocalClassName[i].addEventListener("click", function (event) {
            let jVarLocalCurrentTarget = event.currentTarget;
            let jvarFileName = jVarLocalCurrentTarget.dataset.filename;

            // document.location=`../Page/page1.html?LoanNumber=${jvarFileName}`;
            document.location = `../Page/page1Show.html?LoanNumber=${jvarFileName}`


            console.log("llllllllllll--", jvarFileName);
        })
    };

    let jVarLocalDocumentClassName = document.getElementsByClassName("ShowDocumentClass");

    for (let i = 0; i < jVarLocalDocumentClassName.length; i++) {
        jVarLocalDocumentClassName[i].addEventListener("click", function (event) {
            let jVarLocalCurrentTarget = event.currentTarget;
            let jvarFileName = jVarLocalCurrentTarget.dataset.filename;
            console.log("jvarFileName----------------------------");

            // document.location=`../Page/page1.html?LoanNumber=${jvarFileName}`;
            document.location = `../Documents/DocumentsInsert.html?DocumentNumber=${jvarFileName}`


            console.log("llllllllllll--", jvarFileName);
        })
    };
};



export { StartFunc }
