const buttonStart = document.querySelector('.main');
const buttonReset = document.querySelector('.reset');
const panel = document.querySelector('.time div');
let time = 0;
let active = false;
let idI;

const timer = () => {
if(!active) {
active = !active
buttonStart.textContent = 'Stop';
idI = setInterval(start,10);
} else {
active = !active
buttonStart.textContent = 'Start';
clearInterval(idI)
    }
}

const start = () => {
    time++;
    panel.textContent = (time / 100).toFixed(2);
}

const reset = () => {
    time = 0;
    panel.textContent = '---';
    active = false;
    buttonStart.textContent = "Start";
    clearInterval(idI);
}
buttonStart.addEventListener('click', timer);
buttonReset.addEventListener('click', reset);
    
   
