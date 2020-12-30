let x = 0
let y = 0
let mouseX = 0
let mouseY = 0
let speed = 0.01
let imgArr
let bird

window.onload = function() {
    imgArr = document.getElementsByTagName("img")
    bird = document.getElementsByTagName("div")[0]

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

    for(i = 0; i < imgArr.length; i++) {
        imgArr[i].style.transform = "translate(" + -(mouseX/(6-i)) + "px," + -(mouseY/(6-i)) + "px)"
    }
    bird.style.transform = "translate(" + -(mouseX/3) + "px," + -(mouseY/3) + "px)"
    // imgArr[1].style.transform = "translate(" + -(mouseX/6) + "px," + -(mouseY/6) + "px)"
    // imgArr[2].style.transform = "translate(" + -(mouseX/6) + "px," + -(mouseY/6) + "px)"
    // imgArr[3].style.transform = "translate(" + -(mouseX/6) + "px," + -(mouseY/6) + "px)"

    window.requestAnimationFrame(loop)
}