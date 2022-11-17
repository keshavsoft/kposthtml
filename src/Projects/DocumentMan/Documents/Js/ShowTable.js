let FromHbs = async () => {
    let jVarLocalTableBodyId = document.getElementById("TableBodyId");

    let jVarLocalData = localStorage.getItem("Document");
    const response = await fetch('TableRow.html');
    const movies = await response.text();

    var template = Handlebars.compile(movies);

    jVarLocalTableBodyId.innerHTML = template(JSON.parse(jVarLocalData));
};

export { FromHbs }
