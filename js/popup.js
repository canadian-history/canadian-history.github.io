function whichTransitionEvent() {
    var t,
        el = document.createElement("fakeelement");
  
    var transitions = {
        "transition"      : "transitionend",
        "OTransition"     : "oTransitionEnd",
        "MozTransition"   : "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
    }
  
    for (t in transitions){
        if (el.style[t] !== undefined){
            return transitions[t];
        }
    }
}

function closePopup(id) {
    document.getElementById("overlay-"+id).style.width = "0vw";
    let transition_event = whichTransitionEvent();
    $(`#${"overlay-"+id}`).one(transition_event, 
    function() {
        document.getElementById("overlay-"+id).style.zIndex = "-3";
        document.getElementById("overlay-"+id).style.opacity = "0";
    });
}

function openPopup(id) {
    document.getElementById("overlay-"+id).style.zIndex = "1000";
    document.getElementById("overlay-"+id).style.width = "100vw";
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
