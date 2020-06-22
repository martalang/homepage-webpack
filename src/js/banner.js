const h1 = document.querySelector('h1');
const img = document.querySelector('img');
const dots = [...document.querySelectorAll('span')];
const tekst = ["Pierwszy tekst", "Drugi tekst", "Trzeci tekst"];
let i = 0;

function changeDot() {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[i].classList.add('active');
}

function switchBackground() {
    i++;
    if (i === dots.length) {
        i = 0;
    }
    img.src = `./src/assets/img/banner${i+1}.jpg`;
    h1.textContent = tekst[i];
    changeDot();
}

let intervalID = setInterval(switchBackground, 2500);

function keyChangeDot(e) {
    if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
        clearInterval(intervalID);
        e.code === "ArrowLeft" ? i-- : i++;
        if (i < 0) {
            i = dots.length - 1;
        } else if (i >= dots.length) {
            i = 0;
        }

        img.src = `./src/assets/img/banner${i+1}.jpg`;
        h1.textContent = tekst[i];
        changeDot();
        intervalID = setInterval(switchBackground, 2500);
    }
}
window.addEventListener('keydown', keyChangeDot);