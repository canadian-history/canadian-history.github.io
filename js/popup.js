"use strict";

var curr_popup = null;
var in_modal_open = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function openModalReferences() {
    let obj = document.getElementById("references-modal-"+curr_popup);
    obj.style.zIndex = "1002";
    obj.style.opacity = "1";

    let overlay = document.getElementById("cover");
    overlay.style.opacity = "1";
    overlay.style.zIndex = "1001"

    in_modal_open = true;
}

async function closeModalReferences() {
    let obj = document.getElementById("references-modal-"+curr_popup);
    obj.style.opacity = "0";

    let overlay = document.getElementById("cover");
    overlay.style.opacity = "0";

    in_modal_open = false;

    await sleep(500);
    obj.style.zIndex = "-1";
    overlay.style.zIndex = "-1"
}


async function closePopup(id) {
    let overlay = document.getElementById("overlay-"+id);

    let header = document.getElementById("section-"+curr_popup+"-header");
    header.style.opacity = "0";
    header.style.width = "0vw";

    curr_popup = null;

    document.getElementById("body").classList.remove("stop-scrolling");
    overlay.style.width = "0vw";

    await sleep(700);
    
    overlay.style.zIndex = "-3";
}

async function openPopup(id) {
    let overlay = document.getElementById("overlay-"+id);
    curr_popup = id;
    
    overlay.style.zIndex = "1000";
    overlay.style.width = "100vw";
    overlay.style.opacity = "1";

    let header = document.getElementById("section-"+curr_popup+"-header");
    header.style.opacity = "1";
    header.style.width = "100vw";

    await sleep(700);

    document.getElementById("body").classList.add("stop-scrolling");
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    let isEscape = false;

    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }

    if (isEscape && !in_modal_open) {
        closePopup(curr_popup);
    }
};
