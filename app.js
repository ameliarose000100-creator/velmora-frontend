const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".desktop-nav");

if (menuButton && nav) {
    menuButton.onclick = function () {

        if (nav.style.display === "flex") {
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";
            nav.style.position = "absolute";
            nav.style.top = "88px";
            nav.style.left = "0";
            nav.style.right = "0";
            nav.style.zIndex = "9998";
            nav.style.flexDirection = "column";
            nav.style.background = "#ffffff";
            nav.style.padding = "10px 0";
            nav.style.border = "1px solid #dce3de";
        }

    };
}
