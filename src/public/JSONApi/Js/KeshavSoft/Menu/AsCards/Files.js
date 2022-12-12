import { jFShowFoldersInMenu } from "./Header/FromFolder.js";
import { ReturnFolderName } from "./ForFiles/urlSearchParams.js";
import { FetchFiles } from "./ForFiles/FetchFuncs.js";

jFShowFoldersInMenu({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
});

let jVarLocalFromReturnFolderName = ReturnFolderName();

let jFShowFolderInBreadcrumb = ({ inFolderName }) => {
    let jVarLocalBreadcrumbFolderNameId = document.getElementById("BreadcrumbFolderNameId");
    //jVarLocalBreadcrumbFolderNameId.href = `?FolderName=${inFolderName}`;
    jVarLocalBreadcrumbFolderNameId.innerHTML = inFolderName;
};

if ("FolderName" in jVarLocalFromReturnFolderName) {
    jFShowFolderInBreadcrumb({ inFolderName: jVarLocalFromReturnFolderName.FolderName });

    FetchFiles({
        inProjectName: jVarGlobalProject,
        inSubRoute: jVarGlobalSubRoute,
        inFolderName: jVarLocalFromReturnFolderName.FolderName
    });
};