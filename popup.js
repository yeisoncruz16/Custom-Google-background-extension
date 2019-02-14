document.querySelector("#save").addEventListener("click", function(){
    chrome.storage.local.set({ color: document.querySelector(".jscolor").value });
    
    chrome.sendMessage({
        method : "updateColor",
        color: "#" + document.querySelector(".jscolor").value
    });
});