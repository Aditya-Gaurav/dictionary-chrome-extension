console.log("I am from background.js")

chrome.runtime.onMessage.addListener(receiver);
var word;
function receiver(request, sender, sendResponse) {
    console.log(request)
    const word = request.text;
}