let scrollTop = 0
let coverImg
let cover

window.onload = function() {
    coverImg = document.getElementsByClassName("coverImg")[0]
    cover = document.getElementsByClassName("cover")[0]
    cover.style.opacity = .3
}

window.addEventListener("scroll", function(e) {
    scrollTop = document.documentElement.scrollTop

    // coverImg.style.backgroundPosition = "center " + -scrollTop/20 + "px"
    coverImg.style.transform = "scale(" + (1+scrollTop/2000) + ")"
    cover.style.opacity = .3 + scrollTop / 1000
})