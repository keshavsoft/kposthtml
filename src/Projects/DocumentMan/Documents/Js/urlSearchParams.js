let ReturnLoanNumber = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const q = parseInt(params.get("DocumentNumber"));

    return q;
};

export { ReturnLoanNumber }
