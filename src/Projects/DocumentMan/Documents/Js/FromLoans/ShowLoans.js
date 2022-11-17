let getAll = async () => {
    let jVarLocalFetchUrl = "/DocumentMan/Loans";
    let responseFormData = await fetch(jVarLocalFetchUrl);
    let data = await responseFormData.json();

    return await data;
};

export { getAll }