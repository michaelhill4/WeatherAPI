console.log("Hello World")

document.getElementById("submit").addEventListener("click", function () {
    console.log(document.getElementById("searchUser").value)
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="&appid=5768025933467807bb6d8606bf557031").then(function (response) {
        if (!response.ok) {
            throw response.json();
        }
        console.log(response)
        return response.json();
    })
    
    .then(function (weatherData) {
        console.log(weatherData.city.name)
    })
}

// 5768025933467807bb6d8606bf557031
"https://api.openweathermap.org/data/2.5/forecast?q=sacramento&appid=5768025933467807bb6d8606bf557031"

var franklin = 42

"start" + franklin + "end of sentence"

`start ${franklin} end of sentence`