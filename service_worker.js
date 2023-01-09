var currentZFactor = 100;

chrome.commands.onCommand.addListener(function (command) {
    switch (command) {
        case '16:9':
            currentZFactor = 100;
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                if (tabs.length > 0) {
                    chrome.action.setBadgeText({text: '', tabId: tabs[0].id});
                    chrome.tabs.sendMessage(tabs[0].id, {zfactor: ''});
                }
            });
            break;
        case '21:9':
            currentZFactor = 134;
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                if (tabs.length > 0) {
                    chrome.action.setBadgeText({text: '21:9', tabId: tabs[0].id});
                    chrome.tabs.sendMessage(tabs[0].id, {zfactor: '1.34'});
                }
            });
            break;
        case '+':
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                if (tabs.length > 0) {
                    currentZFactor += 1;
                    z = currentZFactor / 100;
                    chrome.action.setBadgeText({text: 'z' + z, tabId: tabs[0].id});
                    chrome.tabs.sendMessage(tabs[0].id, {zfactor: z});
                }
            })
            break;
        case '-':
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                if (tabs.length > 0) {
                    currentZFactor -= 1
                    z = currentZFactor / 100;
                    chrome.action.setBadgeText({text: 'z' + z, tabId: tabs[0].id});
                    chrome.tabs.sendMessage(tabs[0].id, {zfactor: z});
                }
            })
            break;
        default:
            // do nothing
    }
});
