

let step = 1;

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressBar = document.getElementById('progress');

nextBtn.addEventListener('click', () => {
    step++;
    update();
});

prevBtn.addEventListener('click', () => {
    step--;
    update();
});

function update() {

    const circles = document.querySelectorAll('.circle');

    circles.forEach((circle, index) => {
        if (index < step) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
    progressBar.style.width = `${(step - 1) * 33.33}%`;

    if (step > 1) {
        prevBtn.disabled = false;
    } else {
        prevBtn.disabled = true;
    }

    if (step === circles.length) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}