
let jFShowReportsAsMenu = () => {
    let jVarLocalRoute = jVarGlobalProject;
    let jVarLocalSubRoute = jVarGlobalSubRoute;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Reports/Menu/WithOutFilters/AsArray`;

    fetch(jVarLocalFetchUrl)
        .then(response => {
            return response.json();

            // if (response.status === 400) {
            //     return response.text();
            //     //Swal.fire(response.text());
            // } else {

            // };
        })
        .then(dataFromApi => {
            //Swal.fire(response.text());
            console.log("dataFromApi : ", dataFromApi);

            if ("Link" in dataFromApi) {

                Swal.fire({
                    title: 'Need to copy Project',
                    icon: 'info',
                    html:
                        `<a href="${dataFromApi.Link}"  target="_blank">${dataFromApi.Text}</a>`,
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                        '<i class="fa fa-thumbs-up"></i> From KeshavSoft!',
                    cancelButtonAriaLabel: 'Thumbs down'
                });
            } else {

                if (dataFromApi !== null) {
                    if (dataFromApi.KTF) {
                        let str = '';
                        let htmlstring = dataFromApi.JsonData.forEach((name) => {
                            str += '<option value="' + name + '" />';
                        });

                        document.getElementById("ReportsList").innerHTML = str;
                    };
                };

            };

            // if (typeof dataFromApi === "string") {
            //     Swal.fire({
            //         title: '<strong>HTML <u>example</u></strong>',
            //         icon: 'info',
            //         html:
            //             'You can use <b>bold text</b>, ' +
            //             '<a href="//sweetalert2.github.io">links</a> ' +
            //             'and other HTML tags',
            //         showCloseButton: true,
            //         showCancelButton: true,
            //         focusConfirm: false,
            //         confirmButtonText:
            //             '<i class="fa fa-thumbs-up"></i> Great!',
            //         confirmButtonAriaLabel: 'Thumbs up, great!',
            //         cancelButtonText:
            //             '<i class="fa fa-thumbs-down"></i>',
            //         cancelButtonAriaLabel: 'Thumbs down'
            //     });

            //     //              Swal.fire(dataFromApi);
            // } else {
            //     console.log("dataFromApi : ", dataFromApi, typeof dataFromApi);
            //     if (dataFromApi !== null) {
            //         if (dataFromApi.KTF) {
            //             let str = '';
            //             let htmlstring = dataFromApi.JsonData.forEach((name) => {
            //                 str += '<option value="' + name + '" />';
            //             });

            //             document.getElementById("ReportsList").innerHTML = str;
            //         };
            //     };
            // };

        });
};
