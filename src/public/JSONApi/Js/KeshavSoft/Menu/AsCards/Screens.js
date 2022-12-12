import { jFShowFoldersInMenu } from "./Header/FromFolder.js";
import { ReturnFolderAndFileNameAndItemName } from "./ForScreens/urlSearchParams.js";
import { ScreensFetchAsPost } from "./ForScreens/FetchFuncs.js";

jFShowFoldersInMenu({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
});

let jVarLocalFromReturnFolderAndFileNameAndItemName = ReturnFolderAndFileNameAndItemName();

if ("FolderName" in jVarLocalFromReturnFolderAndFileNameAndItemName) {
    if ("FileName" in jVarLocalFromReturnFolderAndFileNameAndItemName) {
        if ("ItemName" in jVarLocalFromReturnFolderAndFileNameAndItemName) {
            if ("RowCount" in jVarLocalFromReturnFolderAndFileNameAndItemName) {
                ScreensFetchAsPost({
                    inProjectName: jVarGlobalProject,
                    inSubRoute: jVarGlobalSubRoute,
                    inFolderName: jVarLocalFromReturnFolderAndFileNameAndItemName.FolderName,
                    inFileNameWithExtension: jVarLocalFromReturnFolderAndFileNameAndItemName.FileName,
                    inItemName: jVarLocalFromReturnFolderAndFileNameAndItemName.ItemName,
                    inRowCount: jVarLocalFromReturnFolderAndFileNameAndItemName.RowCount
                });
            };
        };
    };
};