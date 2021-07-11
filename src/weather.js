const baseURL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "ed3f89300ea8d10da6509d2a0695afa0\n"

export default class Weather {
    $target = null

    onGeoSuccess = async(position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        await fetch(baseURL + `?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                const weather = data.weather[0].main;
                const postiton = data.name;
                const { temp } = data.main;
                this.$target.innerText = `${temp}º (${weather}) @${postiton}`
            })
    }
    onGeoFail = error => {
        console.log(error);
        alert("Weather Call Error!")
    }

    constructor($target) {
        this.$target = $target

        navigator.geolocation.getCurrentPosition(this.onGeoSuccess, this.onGeoFail);
    }
}