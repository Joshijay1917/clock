let second = document.querySelector(".second")
let minute = document.querySelector(".minute")
let hour = document.querySelector(".hour")
let hou = 0

setInterval(update, 1000);

function update() {
    let currents = new Date().getSeconds();
    let currentm = new Date().getMinutes();
    let currenth = new Date().getHours();
    if (currenth >= 13 || currenth <= 24) {
        currenth = currenth - 12
    }
    let hdeg = (currenth * 30) - 90 + (currentm * 0.5)
    let sdeg = (currents * 6) - 90
    let mdeg = (currentm * 6) - 90

    hour.style.transform = `rotate(${hdeg}deg)`

    minute.style.transform = `rotate(${mdeg}deg)`

    second.style.transform = `rotate(${sdeg}deg)`
}