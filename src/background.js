browser.runtime.onMessage.addListener(handleMessage);

async function handleMessage(message) {
    if (message['type'] === 'fetch-code') {
        const { activity, time, date } = message;
        const query = new URLSearchParams({
            activity,
            time,
            date,
        });
        const url = 'https://api.yusu.co.uk/query_code?' + query.toString();
        const res = await fetch(url);
        if (res.status == 404) {
            // No code found
            return null;
        }
        const data = await res.json();
        return data;
    } else if (message['type'] == 'submit-code') {
        const { activity, time, date, code } = message;
        const url = 'https://api.yusu.co.uk/submit_code';
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                activity,
                date,
                time,
                code,
            }),
        });
        const data = await res.json();
        return data;
    }
}
