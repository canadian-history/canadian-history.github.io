function closePopup(id) {
    document.getElementById("overlay-"+id).style.opacity = "0";
    document.getElementById("overlay-"+id).style.zIndex = "-1";
}

function openPopup(id) {
    document.getElementById("overlay-"+id).style.opacity = "1";
    document.getElementById("overlay-"+id).style.zIndex = "100";
}
