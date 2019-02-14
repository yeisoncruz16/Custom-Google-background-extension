var NAMESCPACE = NAMESCPACE || {
    activePopup : function(){
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.pageAction.show(tabs[0].id);
        });
    }
};

chrome.runtime.onMessage.addListener(function(data, sender, callback){
    NAMESCPACE[data.method]();
});