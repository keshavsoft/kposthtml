import { jFShowFoldersInMenu } from "./Header/FromFolder.js";
import { ReturnFolderName } from "./ForFiles/urlSearchParams.js";
import { FetchFiles } from "./ForFiles/FetchFuncs.js";

jFShowFoldersInMenu({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
});

let jVarLocalFromReturnFolderName = ReturnFolderName();

if ("FolderName" in jVarLocalFromReturnFolderName) {
    FetchFiles({
        inProjectName: jVarGlobalProject,
        inSubRoute: jVarGlobalSubRoute,
        inFolderName: jVarLocalFromReturnFolderName.FolderName
    });
};