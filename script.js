async function getWeather() {

    const city = document.getElementById("cityInput").value;
    const apiKey = "45e38e8931a22b9d2fe633fb72cfa474";

    if (city === "") return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById("weatherResult").innerHTML = "City not found ❌";
            return;
        }

        document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>☁ Weather: ${data.weather[0].main}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬 Wind: ${data.wind.speed} m/s</p>
        `;

    } catch (error) {
        document.getElementById("weatherResult").innerHTML = "Error fetching data";
    }
}