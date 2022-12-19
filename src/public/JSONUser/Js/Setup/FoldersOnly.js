import { jFCheckToken } from "./FoldersOnly/ForLogin.js";

let ModalId = "LoginModalId";
let TokenName = "KUMAToken";

let jFSetup = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let LocalDataPK = jVarLocalCurrentTarget.dataset.pk;

    let jVarLocalUrl = `/JSONUser/Users/Api/Setup/FoldersOnly/${LocalDataPK}`;
    let response = await fetch(jVarLocalUrl);
    let data = await response.json();

    if (data.KTF) {
        var myModal = new bootstrap.Modal(document.getElementById('SetupModal'), {
            keyboard: false
        });
        myModal.show();
    };
};

let jFShowData = async () => {
    let jVarLocalUrl = "/JSONUser/Users/Api/ShowData";
    let response = await fetch(jVarLocalUrl);
    let data = await response.json();

    let jVarLocalRawTemplate = document.getElementById("HbsTemplateForBody").innerHTML;

    document.getElementById("KTableBodyId").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(data);
};

let jFFirmDetails = ({ inUserName, inFirmDetails }) => {
    localStorage.setItem("kUserName", inUserName);
    localStorage.setItem("FirmDetails", JSON.stringify(inFirmDetails));
};

let jFCheckUserNamePassword = async ({ inUserName, inPassword }) => {
    let jVarLocalFetchUrl = "/JSONUser/Admin/Api/InAdminDataJson/Check/TokenToCookie";

    let response = await fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inUserName, inPassword })
    });

    if (response.status === 503) {
        let FetchDataText = await response.text();

        //if (confirm("click ok to continue")) window.location = "https://github.com/keshavsoft/JSONUser";

        if (confirm("Copy Project from Github Repo")) window.open("https://github.com/keshavsoft/JSONUser", "_blank");

        //alert(FetchDataText);
        return { KTF: false };
    };

    let FetchDataJson = await response.json();

    if (FetchDataJson !== null) {
        if (FetchDataJson.KTF) {
            var myModalEl = document.getElementById('LoginModalId');

            var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance

            modal.hide();

            jFFirmDetails({ inUserName, inFirmDetails: FetchDataJson });
            jFCheckToken();
            return await FetchDataJson;
        } else {
            document.getElementById("KUserNameInput").classList.add("is-invalid")
        };
    };
};

let jFLoginCheck = async () => {
    let jVarLocalObject = {};
    let jVarReturnData;

    jVarLocalObject.UserName = document.getElementById("KUserNameInput").value;
    jVarLocalObject.Password = document.getElementById("KPasswordInput").value;

    if (jVarLocalObject.UserName !== "" && jVarLocalObject.Password !== "") {
        jVarReturnData = await jFCheckUserNamePassword({ inUserName: jVarLocalObject.UserName, inPassword: jVarLocalObject.Password });

        if (jVarReturnData.KTF) {
            await jFShowData();
            //jVarLocalApiFuncs.ShowData();
        };
    };
};

let jFDeleteCookie = () => {
    let jVarLocalTokenName = TokenName;
    //document.cookie = "KAToken=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;";
    document.cookie = `${jVarLocalTokenName}=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;`;
};

let jFShowModal = () => {
    localStorage.removeItem("kUserName");
    localStorage.removeItem("FirmDetails");
    jFDeleteCookie();

    let jVarLocalId = ModalId;
    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

    myModal.show();
};

let jVarModalLoginButtonId = document.getElementById("ModalLoginButtonId");
jVarModalLoginButtonId.addEventListener("click", jFLoginCheck);

if (jFCheckToken({})) {
    await jFShowData();
    let jVarLocalSetupButtonClass = document.querySelectorAll(".SetupButtonClass");

    jVarLocalSetupButtonClass.forEach(box => {
        console.log(" box : ", box);
        box.addEventListener('click', jFSetup);
    });
} else {
    jFShowModal();
    //console.log("aaaaaannnnnnnnnnn : ");
};
