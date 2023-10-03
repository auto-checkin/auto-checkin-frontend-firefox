let date = document.querySelector(".pull-right").innerText;
let activity = document.querySelector("div.row:nth-child(2) > div:nth-child(2)").innerText;
let time = document.querySelector("div.row:nth-child(1) > div:nth-child(2)").innerText;

browser.runtime.onMessage.addListener(function (message) {
    if (message['type'] === 'found-code') {
        console.log(message);
    }
});

browser.runtime.sendMessage({
    type: 'fetch-code',
    date,
    activity,
    time,
});

//document.getElementById("notie-input-field")
