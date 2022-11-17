let FetchPost = async ({ inLoanNumber }) => {
    let jVarLocalFetch = "/DocumentMan/DocumentDetails";

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inFileName: inLoanNumber })
    };

    let responseFormData = await fetch(jVarLocalFetch, settings);
    let LocalFromFetch = await responseFormData.json();
    
    localStorage.setItem("Document", JSON.stringify(LocalFromFetch.DocumentsInfo));

    return await LocalFromFetch;
};

export {
    FetchPost
}