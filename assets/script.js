console.log("Hello World")

var weatherApiKey = "5768025933467807bb6d8606bf557031"
var weatherCard = document.getElementById("content")


document.getElementById("submit").addEventListener("click", function () {
    console.log(document.getElementById("searchUser").value)
    var cityName = document.getElementById("searchUser").value
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${weatherApiKey}`)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            console.log(response)
            return response.json();
        })

        .then(function (weatherData) {
            console.log(weatherData)
            console.log(weatherData.city.name)

            document.getElementById("tempInput").textContent = weatherData.list[0].main.temp

            // document.getElementbyId = navigate into data array
        })
})



// 5768025933467807bb6d8606bf557031
// "https://api.openweathermap.org/data/2.5/forecast?q=sacramento&appid=5768025933467807bb6d8606bf557031"