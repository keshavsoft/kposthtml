let ReturnFolderAndFileNameAndItemName = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const FolderName = params.get("FolderName");
    const FileName = params.get("FileName");
    const ItemName = params.get("ItemName");

    return { FolderName, FileName, ItemName };
};

export { ReturnFolderAndFileNameAndItemName }
