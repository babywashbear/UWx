chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (isNetflix()) {
        setVideoZoom_Netflix(message.zfactor);
    } else {
        setVideoZoom_Default(message.zfactor);
    }
});

function setVideoZoom_Default(zfactor) {
    var videoTags = document.getElementsByTagName('video');
    for (let i = 0; i < videoTags.length; i++) {
        if (zfactor) {
            videoTags[i].style.transform='scale(' + zfactor + ')';
        }
        else {
            videoTags[i].style.transform='';
        }
    }
}

function isNetflix() {
    return (window.location.href.indexOf('netflix.com') > -1);
}

function setVideoZoom_Netflix(zfactor) {
    var videoTags = document.getElementsByTagName('video');
    for (let i = 0; i < videoTags.length; i++) {
        if (zfactor) {
            videoTags[i].style.transform='scale(' + zfactor + ')';
            videoTags[i].style.left='0%';
            videoTags[i].style.top='0%';
        }
        else {
            videoTags[i].style.transform='';
            videoTags[i].style.left='';
            videoTags[i].style.top='';
        }
    }
}