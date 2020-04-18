function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function closePopup(id) {
    document.getElementById("overlay-"+id).style.width = "0vw";
    document.getElementById("overlay-button-"+id).style.opacity = "0";
    await sleep(700);
    document.getElementById("overlay-"+id).style.zIndex = "-3";
}

function openPopup(id) {
    document.getElementById("overlay-"+id).style.zIndex = "1000";
    document.getElementById("overlay-"+id).style.width = "100vw";
    document.getElementById("overlay-"+id).style.opacity = "1";
    document.getElementById("overlay-button-"+id).style.opacity = "1";
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
