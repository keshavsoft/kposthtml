import { FetchFunc } from "./FirmDetailsToLocalStorage.js";

let jFStartFunc = () => {
    let jVarLocalFirmDetailsInHeaderId = document.getElementById("FirmDetailsInHeaderId");

    jVarLocalFirmDetailsInHeaderId.addEventListener("click", FetchFunc);
};

jFStartFunc();