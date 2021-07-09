const clockEl = document.getElementById("clock");

const timer = function () {
    const now = new Date();
    let hour = now.getHours();
    if (hour > 12) hour -= 12;
    const hourStr = String(hour).padStart(2, "0");
    const minuteStr = String(now.getMinutes()).padStart(2, "0");
    const secondStr = String(now.getSeconds()).padStart(2, "0");
    clockEl.innerText = `${hourStr}:${minuteStr}:${secondStr}`;
}
setInterval(timer, 1000);