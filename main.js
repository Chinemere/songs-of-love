
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

var mySound;

// var pages = document.getElementsByClassName("page");
// for (var i = 0; i < pages.length; i++) {
//     var page = pages[i];
//     if (i % 2 === 0) {
//         page.style.zIndex = (pages.length - i);
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     for (var i = 0; i < pages.length; i++) {
//         pages[i].pageNum = i + 1;
//         pages[i].onclick = function () {
//             if (this.pageNum % 2 === 0) {
//                 this.classList.remove("flipped");
//                 this.previousElementSibling.classList.remove("flipped");
//                 mySound = new sound("page-flip-02.mp3");
//                 mySound.play();

//             }
//             else {
//                 this.classList.add("flipped");
//                 this.nextElementSibling.classList.add('flipped');
//                 mySound = new sound("page-flip-02.mp3");
//                 mySound.play();
//             }
//         }
//     }
// })
var pages = document.getElementsByClassName('page');
for (var i = 0; i < pages.length; i++) {
    var page = pages[i];
    if (i % 2 === 0) {
        page.style.zIndex = (pages.length - i);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    for (var i = 0; i < pages.length; i++) {
        //Or var page = pages[i];
        pages[i].pageNum = i + 1;
        pages[i].onclick = function () {
            if (this.pageNum % 2 === 0) {
                this.classList.remove('flipped');
                this.previousElementSibling.classList.remove('flipped');
            }
            else {
                this.classList.add('flipped');
                this.nextElementSibling.classList.add('flipped');
            }
        }
    }
})
