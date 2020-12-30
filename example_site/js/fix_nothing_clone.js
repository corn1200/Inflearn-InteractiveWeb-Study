let human
let h1
let bg

let x = 0
let y = 0
let mouseX = 0
let mouseY = 0
let speed = 0.009

window.onload = function() {
    h1 = document.getElementsByTagName("h1")[0]
    human = document.getElementsByClassName("human")[0]
    bg = document.getElementsByClassName("bg")[0]

    window.addEventListener('mousemove', mouseFunc, false)

    function mouseFunc(e) {
        x = (e.clientX - window.innerWidth / 2)
        y = (e.clientY - window.innerHeight / 2)
    }
    loop()
}

function loop() {
    mouseX += (x - mouseX) * speed
    mouseY += (y - mouseY) * speed

    h1.innerHTML = "x: " + x + " y: " + y
    human.style.transform = "translate(" + -(mouseX / 9) + "px," + -(mouseY / 9) + "px)"
    bg.style.transform = "translate(" + (mouseX / 2) + "px," + (mouseY / 2) + "px)"

    window.requestAnimationFrame(loop)
}