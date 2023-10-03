let date = document.querySelector(".pull-right").innerText;
let activity = document.querySelector("div.row:nth-child(2) > div:nth-child(2)").innerText;
let time = document.querySelector("div.row:nth-child(1) > div:nth-child(2)").innerText;
const query = new URLSearchParams({
    "date":date,
    "time":time,
    "activity":activity
});
fetch("https://api.yusu.co.uk/query_code?"+query.toString()
).then(response =>response.json())
.then(data => {alert(data)
    
}).catch(error => console.log(error))
//document.getElementById("notie-input-field")
