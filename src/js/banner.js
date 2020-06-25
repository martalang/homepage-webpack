const sliderHeader = document.querySelector('.slider__text');
const sliderPicture = document.querySelector('.slider__picture');
const sliderDots = [...document.querySelectorAll('.slider__dots--dot')];
const sliderText = ["Pierwszy tekst", "Drugi tekst", "Trzeci tekst"];
let i = 0;

function changeDot() {
    const activeDot = sliderDots.findIndex(dot => dot.classList.contains('active'));
    sliderDots[activeDot].classList.remove('active');
    sliderDots[i].classList.add('active');
}

function switchBackground() {
    i++;
    if (i === sliderDots.length) {
        i = 0;
    }
    sliderPicture.src = `../src/assets/img/banner${i+1}.jpg`;
    sliderHeader.textContent = sliderText[i];
    changeDot();
}

let intervalID = setInterval(switchBackground, 2500);

function keyChangeDot(e) {
    if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
        clearInterval(intervalID);
        e.code === "ArrowLeft" ? i-- : i++;
        if (i < 0) {
            i = sliderDots.length - 1;
        } else if (i >= sliderDots.length) {
            i = 0;
        }

        sliderPicture.src = `../src/assets/img/banner${i+1}.jpg`;
        sliderHeader.textContent = sliderText[i];
        changeDot();
        intervalID = setInterval(switchBackground, 2500);
    }
}
window.addEventListener('keydown', keyChangeDot);