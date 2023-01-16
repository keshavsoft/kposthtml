let StartFunc = async ({ inSubRoute, inUserName, inPassWord }) => {
    //let jVarLocalFetchUrl = `/${inSubRoute}/Validate/Users/InUserDataJson/ForUserNameAndPassword/TokenToCookie`;
    let jVarLocalFetchUrl = `/${inSubRoute}/Admin/Api/InAdminDataJson/Check/TokenToCookie`;

    //    http://localhost:4120/JSONUser/Admin/Api/InAdminDataJson/Check/TokenToCookie

    // inPassword
    // :
    // "KESHAV"
    // inUserName
    // :
    // "KESHAV"

    let response = await fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inUserName,
            inPassword: inPassWord
        })
    });

    let FetchData = await response.json();
    return await FetchData;
};

export { StartFunc }