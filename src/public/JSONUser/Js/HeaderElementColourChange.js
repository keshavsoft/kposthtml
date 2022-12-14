let jFChangeHeaderActiveClass = () => {
    let jVarLocalPathArray = window.location.pathname.split("/");
    let jVarLocalHTMLName = jVarLocalPathArray[jVarLocalPathArray.length - 1];

    jFChangeNavAnchorClass({ inClassName: jVarLocalHTMLName.split(".")[0] });
};

let jFChangeNavAnchorClass = ({ inClassName }) => {
    let jVarLocalNavBarId = document.getElementById("sidebarMenu");
    let jVarLocalAnchorNeeded = jVarLocalNavBarId.querySelector(`.${inClassName}AClass`);

    jVarLocalNavBarId.querySelectorAll("li a").forEach(el => {
        if (el.classList.contains("active")) {
            el.classList.remove("active");
        };
     //   el.classList.add("text-white");
    });

    if (jVarLocalAnchorNeeded !== null) {
        // if (jVarLocalAnchorNeeded.classList.contains("active")) {
        //     jVarLocalAnchorNeeded.classList.remove("text-white");
        // };

        jVarLocalAnchorNeeded.classList.add("active");
    };

};

jFChangeHeaderActiveClass();