let ReturnLoanNumber = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const q = parseInt(params.get("LoanNumber"));

    return q;
};

export { ReturnLoanNumber }
