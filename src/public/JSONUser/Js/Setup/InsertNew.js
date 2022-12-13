let serializeObject = (form) => {
    // Create a new FormData object
    const formData = new FormData(form);

    // Create an object to hold the name/value pairs
    const pairs = {};

    // Add each name/value pair to the object
    for (const [name, value] of formData) {
        pairs[name] = value;
    };

    return pairs;
};

let jFSave = async () => {
    var form = document.getElementById("kform1");
    let jVarLocalFetchPostData = serializeObject(form);
    let jVarLocalSettings = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalFetchPostData)
    };

    let jVarLocalUrl = "/JSONUser/Users/Api/Save/WithDataPk";
    let response = await fetch(jVarLocalUrl, jVarLocalSettings);
    let data = await response.json();

    if (data.KTF) {
        //jVarLocalApiFuncs.ShowData();
        window.location = "Show.html";
    } else {
        Swal.fire(
            data.KReason
        )
    };
    return data;
};


let jVarLocalSaveButtonid = document.getElementById("SaveButtonid");
jVarLocalSaveButtonid.addEventListener("click", jFSave);

