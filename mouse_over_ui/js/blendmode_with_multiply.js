let cursorItem
let circle
let btn_yes
let btn_no
let x = 0
let y = 0
let mouseX = 0
let mouseY = 0

window.onload = function() {
    btn_yes = document.querySelector("#yes")
    btn_no = document.querySelector("#no")

    cursorItem = document.querySelector(".cursorItem")
    circle = document.querySelector(".circle")

    btn_yes.addEventListener("mouseover", function(e) {
        circle.style.transform = "scale(.3)"
    })
    btn_yes.addEventListener("mouseout", function(e) {
        circle.style.transform = "scale(1)"
    })

    btn_no.addEventListener("mouseover", function(e) {
        circle.style.transform = "scale(.3)"
    })
    btn_no.addEventListener("mouseout", function(e) {
        circle.style.transform = "scale(1)"
    })

    window.addEventListener("mousemove", function(e) {
        x = e.clientX
        y = e.clientY
    })

    loop()
}

function loop() {
    mouseX += (x - mouseX) * .3
    mouseY += (y - mouseY) * .3
    cursorItem.style.transform = "translate(" + mouseX + "px, " + mouseY + "px)"

    requestAnimationFrame(loop)
}