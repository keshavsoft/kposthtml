import { jFShowFoldersInMenu } from "./Header/FromFolder.js";
import { ReturnFolderAndFileName } from "./ForItems/urlSearchParams.js";
import { ForItemsFetchAsPost } from "./ForItems/FetchFuncs.js";

jFShowFoldersInMenu({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
});

let jVarLocalFromReturnFolderAndFileName = ReturnFolderAndFileName();

if ("FolderName" in jVarLocalFromReturnFolderAndFileName) {
    if ("FileName" in jVarLocalFromReturnFolderAndFileName) {
        ForItemsFetchAsPost({
            inProjectName: jVarGlobalProject,
            inSubRoute: jVarGlobalSubRoute,
            inFolderName: jVarLocalFromReturnFolderAndFileName.FolderName,
            inFileNameWithExtension: jVarLocalFromReturnFolderAndFileName.FileName
        })
    };
};