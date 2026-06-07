const timer = document.createElement("div");
timer.id = "timer";
document.body.appendChild(timer);

function updateTime() {
    timer.textContent = new Date().toLocaleString();
}

updateTime();
setInterval(updateTime, 1000);