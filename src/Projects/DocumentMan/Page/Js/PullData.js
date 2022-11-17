let FetchPost = async ({ inLoanNumber }) => {
    let jVarLocalFetch = "/DocumentMan/LoanDetails";

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
    
    localStorage.setItem("PageInfo", JSON.stringify(LocalFromFetch.PageInfo));

    return await LocalFromFetch;
};

export {
    FetchPost
}