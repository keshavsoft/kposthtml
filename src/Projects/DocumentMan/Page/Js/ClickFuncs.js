let jFClickDate = () => {
    Swal.fire({
        title: 'Enter Date: ',
        html: `<input type="date" id="Numbersweet" class="swal2-input" placeholder=" Enter Date "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#Numbersweet').value;
            let jVarLocalDate = document.getElementById("DateId");
            localStorage.setItem("DocumentDate", `${FolderName}`);
            let jVarLocalDateFromLocalStroge = localStorage.getItem("DocumentDate");
            jVarLocalDate.innerHTML = jVarLocalDateFromLocalStroge;
        }
    })

};

let jFClickBranchId = () => {
    Swal.fire({
        title: 'Name of the DCCB Branch',
        html: `<input type="text" id="BranchIdsweet" class="swal2-input" placeholder="Insert FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#BranchIdsweet').value;
            let jVarLocalBranchId = document.getElementById("BranchId");
            localStorage.setItem("BranchId", `${FolderName}`);
            let jVarLocalBranchName = localStorage.getItem("BranchId");
            jVarLocalBranchId.innerHTML = jVarLocalBranchName;
        }
    })

};

let jFClickNumberId = () => {
    Swal.fire({
        title: 'L.A.No',
        html: `<input type="text" id="NumberIdsweet" class="swal2-input" placeholder="Enter L.A.No "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#NumberIdsweet').value;
            let jVarLocalNumberId = document.getElementById("NumberId");
            localStorage.setItem("LANumber", `${FolderName}`);
            let jVarLocalNumber = localStorage.getItem("LANumber");
            jVarLocalNumberId.innerHTML = jVarLocalNumber;
        }
    })

};

let jFClickNameId = () => {
    Swal.fire({
        title: 'Name of the PACS',
        html: `<input type="text" id="NameIdsweet" class="swal2-input" placeholder="Enter Name of the PACS "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#NameIdsweet').value;
            let jVarLocalNameId = document.getElementById("NameId");
            localStorage.setItem("Name", `${FolderName}`);
            let jVarLocalName = localStorage.getItem("Name");
            jVarLocalNameId.innerHTML = jVarLocalName;
        }
    })

};

let jFClickPurposeId = () => {
    Swal.fire({
        title: 'Purpose',
        html: `<input type="text" id="PurposeIdsweet" class="swal2-input" placeholder="Enter Purpose "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#PurposeIdsweet').value;
            let jVarLocalPurposeId = document.getElementById("PurposeId");
            localStorage.setItem("Purpose", `${FolderName}`);
            let jVarLocalPurpose = localStorage.getItem("Purpose");
            jVarLocalPurposeId.innerHTML = jVarLocalPurpose;

        }
    })

};

let jFClickName1Id = () => {
    Swal.fire({
        title: '3)Who should mortgage the property in favour of the bank in case of sanction of loan',
        html: `<input type="text" id="Name1IdIdsweet" class="swal2-input" placeholder="Enter FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#Name1IdIdsweet').value;
            let jVarLocalName1Id = document.getElementById("Name1Id");
            localStorage.setItem("Name1", `${FolderName}`);
            let jVarLocalName1 = localStorage.getItem("Name1");
            jVarLocalName1Id.innerHTML = jVarLocalName1;
        }
    })

};


let jFClickName2Id = () => {
    Swal.fire({
        title: '2)Who is the actual title folder of the scheduled Property and mortgager',
        html: `<input type="text" id="Name2Idsweet" class="swal2-input" placeholder="Insert FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#Name2Idsweet').value;
            let jVarLocalName1Id = document.getElementById("Name2Id");
            localStorage.setItem("Name2Id", `${FolderName}`);
            let jVarLocalName1 = localStorage.getItem("Name2Id");
            jVarLocalName1Id.innerHTML = jVarLocalName1;


        }
    })
};

let jFClickVillageId = () => {
    Swal.fire({
        title: 'Name of the Village',
        html: `<input type="text" id="VillageIdsweet" class="swal2-input" placeholder="Insert FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#VillageIdsweet').value;
            let jVarLocalVillageId = document.getElementById("VillageId");
            localStorage.setItem("Village", `${FolderName}`);
            let jVarLocalVillage = localStorage.getItem("Village");
            jVarLocalVillageId.innerHTML = jVarLocalVillage;
        }
    })
};


let jFClickLandId = () => {
    Swal.fire({
        title: '1) The complete description of immovable Property of offered as security for creation of mortgage by deposits of the deeds',
        html: `<input type="text" id="LandIdsweet" class="swal2-input" placeholder="Insert FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#LandIdsweet').value;
            let jVarLocalLandId = document.getElementById("LandId");
            localStorage.setItem("Land", `${FolderName}`);
            let jvarLand = localStorage.getItem("Land");
            jVarLocalLandId.innerHTML = jvarLand;
        }
    })


};

let jFClickName3Id = () => {
    Swal.fire({
        title: 'Name of the Applicant',
        html: `<input type="text" id="Name3Idsweet" class="swal2-input" placeholder="Insert FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#Name3Idsweet').value;
            let jVarLocalName3Id = document.getElementById("Name3Id");
            localStorage.setItem("Name3", `${FolderName}`);
            let jvarName3 = localStorage.getItem("Name3");
            jVarLocalName3Id.innerHTML = jvarName3;

        }
    })

};
let jFClickServeyNo1 = () => {
    Swal.fire({
        title: 'Name of the Applicant',
        html: `<input type="text" id="ServeyNo1Idsweet" class="swal2-input" placeholder="Insert FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#ServeyNo1Idsweet').value;
            let jVarLocalServeyNo1 = document.getElementById("ServeyNo1");
            localStorage.setItem("ServeyNo1", `${FolderName}`);
            let jvarServeyNo1 = localStorage.getItem("ServeyNo1");
            jVarLocalServeyNo1.innerHTML = jvarServeyNo1;

        }
    })

};
let jFClickServeyNo2 = () => {
    Swal.fire({
        title: 'Eneter',
        html: `<input type="text" id="ServeyNo2Idsweet" class="swal2-input" placeholder="Eneter "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#ServeyNo2Idsweet').value;
            let jVarLocalServeyNo2 = document.getElementById("ServeyNo2");
            localStorage.setItem("ServeyNo2", `${FolderName}`);
            let jvarServeyNo2 = localStorage.getItem("ServeyNo2");
            jVarLocalServeyNo2.innerHTML = jvarServeyNo2;

        }
    })

};
let jFClickServeyNo3 = () => {
    Swal.fire({
        title: 'Enter',
        html: `<input type="text" id="ServeyNo3Idsweet" class="swal2-input" placeholder="Enter "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#ServeyNo3Idsweet').value;
            let jVarLocalServeyNo3 = document.getElementById("ServeyNo3");
            localStorage.setItem("ServeyNo3", `${FolderName}`);
            let jvarServeyNo3 = localStorage.getItem("ServeyNo3");
            jVarLocalServeyNo3.innerHTML = jvarServeyNo3;

        }
    })

};
let jFClickServeyNo4 = () => {
    Swal.fire({
        title: 'Enter',
        html: `<input type="text" id="ServeyNo4Idsweet" class="swal2-input" placeholder="Enter "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#ServeyNo4Idsweet').value;
            let jVarLocalServeyNo4 = document.getElementById("ServeyNo4");
            localStorage.setItem("ServeyNo4", `${FolderName}`);
            let jvarServeyNo4 = localStorage.getItem("ServeyNo4");
            jVarLocalServeyNo4.innerHTML = jvarServeyNo4;

        }
    })

};
let jFClickServeyNoTotal = () => {
    Swal.fire({
        title: 'Enret Total',
        html: `<input type="text" id="ServeyNoTotalIdsweet" class="swal2-input" placeholder="Enter Total "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#ServeyNoTotalIdsweet').value;
            let jVarLocalServeyNoTotal = document.getElementById("ServeyNoTotal");
            localStorage.setItem("ServeyNoTotal", `${FolderName}`);
            let jvarServeyNoTotal = localStorage.getItem("ServeyNoTotal");
            jVarLocalServeyNoTotal.innerHTML = jvarServeyNoTotal;

        }
    })

};


export {
    jFClickDate,
    jFClickBranchId, jFClickNumberId,
    jFClickNameId, jFClickPurposeId,
    jFClickName1Id, jFClickName2Id,
    jFClickVillageId, jFClickLandId,
    jFClickName3Id, jFClickServeyNo1,
    jFClickServeyNo2, jFClickServeyNo3,
    jFClickServeyNo4,jFClickServeyNoTotal
}