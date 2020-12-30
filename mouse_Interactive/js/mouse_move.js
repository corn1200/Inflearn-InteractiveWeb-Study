let cursor_item
let h1

let x = 0
let y = 0
let mouseX = 0
let mouseY = 0
let speed = 0.09

window.onload = function() {
    // let h1 = document.getElementsByTagName("h1")[0]
    cursor_item = document.getElementsByClassName("cursor_item")[0]

    window.addEventListener('click', mouseFunc, false)

    function mouseFunc(e) {
        x = e.clientX
        y = e.clientY
        cursor_item.style.transform = "translate(" + x + "px," + y + "px)"
        // h1.innerHTML = "x: " + x + " y: " + y
    }
    // loop()
}

// function loop() {
//     mouseX += (x - mouseX) * speed
//     mouseY += (y - mouseY) * speed

//     window.requestAnimationFrame(loop)
// }