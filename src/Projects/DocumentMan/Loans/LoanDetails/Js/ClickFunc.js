let StartFunc1 = async (event) => {
    let jVarLocalFetchUrl = "/DocumentMan/LoanDetails";
    let jVarLocalCurrentTarget = event.currentTarget;

    console.log("jVarLocalCurrentTarget:", jVarLocalCurrentTarget.dataset.data - filename);

    let jVarLocalButtonId = document.getElementById("ButtonId");
    let FileNameFroAttribute = jVarLocalButtonId.getAttribute('data-FileName');
    console.log("FileNameFroAttribute---", FileNameFroAttribute);

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: { inFileName: FileNameFroAttribute }
    };

    let responseFormData = await fetch(jVarLocalFetchUrl, settings);

    let data = await responseFormData.json();


    return await data;



};

let StartFunc = async (event) => {
    let jVarLocalClassName = document.getElementsByClassName("ShowButtonClass");
    console.log("ppppppppppp", jVarLocalClassName);

    for (let i = 0; i < jVarLocalClassName.length; i++) {
        jVarLocalClassName[i].addEventListener("click", function () {
            console.log("Clicked index: ");
        })
    };





};

export { StartFunc };