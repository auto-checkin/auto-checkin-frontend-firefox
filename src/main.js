(async function() {
    // let date = document.querySelector(".pull-right").innerText;
    // let activity = document.querySelector("div.row:nth-child(2) > div:nth-child(2)").innerText;
    // let time = document.querySelector("div.row:nth-child(1) > div:nth-child(2)").innerText;

    const date = 'today';
    const time = 'now';
    const activity = 'learnin';

    console.log('ready to sendmessage')
    const res = await browser.runtime.sendMessage({
        type: 'fetch-code',
        date,
        activity,
        time,
    });
    if (res !== null) {
        console.log(res);
    } else {
        console.log('No code found');
    }

    // const submitted = await browser.runtime.sendMessage({
    //     type: 'submit-code',
    //     date,
    //     activity,
    //     time,
    //     code: '123456',
    // });

    //document.getElementById("notie-input-field")
})();
