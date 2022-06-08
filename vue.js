window.onload = function() {
    var zoomButton = document.getElementById('zbutton');
    zoomButton.addEventListener('click', changeZoom());
    console.log('started.');
};

function changeZoom() {
    var zfactor = document.getElementById('zfactor');
    console.log('change zoom to ' + zfactor);
    document.getElementsByClassName('zoom-to-fill')[1].style.transform='scale(' + zfactor + ')';
}