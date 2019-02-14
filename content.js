var NAMESCPACE = NAMESCPACE || {
    updateColor: function (color) {
        document.querySelector("body").style.background = color;
    }
};

chrome.storage.local.get(['color'], function(items){
    NAMESCPACE.updateColor("#" + items.color);
})

chrome.runtime.sendMessage({
    "method" : "activePopup"
});

chrome.storage.onChanged.addListener(function (changes){
    for (var key in changes) {
        if ( key == 'color' )
            NAMESCPACE.updateColor("#" + changes[key].newValue);
    }
});