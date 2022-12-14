let jFChangeHeaderActiveClass = () => {
    let jVarLocalPathArray = window.location.pathname.split("/");
    let jVarLocalHTMLName = jVarLocalPathArray[jVarLocalPathArray.length - 1];

    jFChangeNavAnchorClass({ inClassName: jVarLocalHTMLName.split(".")[0] });
};

let jFChangeNavAnchorClass = ({ inClassName }) => {
    let jVarLocalNavBarId = document.getElementById("NavBarId");
    let jVarLocalAnchorNeeded = jVarLocalNavBarId.querySelector(`.${inClassName}AClass`);

    jVarLocalNavBarId.querySelectorAll("main a").forEach(el => {
        if (el.classList.contains("text-info")) {
            el.classList.remove("text-info");
        };
        el.classList.add("text-white");

    });

    if (jVarLocalAnchorNeeded !== null) {

        if (jVarLocalAnchorNeeded.classList.contains("text-white")) {
            jVarLocalAnchorNeeded.classList.remove("text-white");
        };

        jVarLocalAnchorNeeded.classList.add("text-info");
    };
};

jFChangeHeaderActiveClass();