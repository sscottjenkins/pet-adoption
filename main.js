async function start(){

    const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
    const weatherData = await weatherPromise.json()
    const currentTemp = weatherData.properties.periods[0].temperature

    document.querySelector("#temp-output").textContent = currentTemp
}

start()


