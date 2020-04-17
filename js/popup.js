function closePopup(id) {
    document.getElementById("overlay-"+id).style.opacity = "0";
    document.getElementById("overlay-"+id).style.zIndex = "-1";
}

function openPopup(id) {
    document.getElementById("overlay-"+id).style.zIndex = "100";
    document.getElementById("overlay-"+id).style.opacity = "1";
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    let isEscape = false;

    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }

    if (isEscape) {
        for (const x of Array(4).keys()) {
            closePopup(x+1);
        }
    }
};
