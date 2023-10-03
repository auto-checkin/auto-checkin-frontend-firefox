browser.runtime.onMessage.addListener(handleMessage);

async function handleMessage(message) {
    if (message['type'] === 'fetch-code') {
        const { activity, time, date } = message;
        const query = new URLSearchParams({
            activity,
            time,
            date,
        });
        const url = 'https://api.yusu.org.uk/query_code?' + query.toString();
        const res = await fetch(url);
        const data = await res.json();
        browser.runtime.sendMessage({
            type: 'found-code',
            item: {
                activity,
                time,
                date,
            },
            response: data,
        });
    }
}
