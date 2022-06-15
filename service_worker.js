chrome.commands.onCommand.addListener(function (command) {
    switch (command) {
        case '16:9':
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                if (tabs.length > 0) {
                    chrome.action.setBadgeText({text: '', tabId: tabs[0].id});
                    chrome.tabs.sendMessage(tabs[0].id, {zfactor: ''});
                }
            });
            break;
        case '21:9':
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                if (tabs.length > 0) {
                    chrome.action.setBadgeText({text: '21:9', tabId: tabs[0].id});
                    chrome.tabs.sendMessage(tabs[0].id, {zfactor: '1.34'});
                }
            });
            break;
        case '32:9':
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                if (tabs.length > 0) {
                    chrome.action.setBadgeText({text: '32:9', tabId: tabs[0].id});
                    chrome.tabs.sendMessage(tabs[0].id, {zfactor: '2.00'});
                 }
            });
            break;
        default:
            // do nothing
    }
});
