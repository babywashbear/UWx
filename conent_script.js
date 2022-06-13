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
            videoTags[i].style.setProperty('transform', 'scale(' + zfactor + ')', 'important');
        }
        else {
            videoTags[i].style.removeProperty('transform');
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
            videoTags[i].style.setProperty('transform', 'scale(' + zfactor + ') translate(-50%, -50%)', 'important');
            videoTags[i].style.setProperty('transform-origin', 'left top', 'important');
        }
        else {
            videoTags[i].style.removeProperty('transform');
            videoTags[i].style.setProperty('transform-origin');
        }
    }
}