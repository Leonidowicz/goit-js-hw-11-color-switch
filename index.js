const ref = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  btnReset: document.querySelector('[data-action="reset"]'),
};
let interval = null;
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIndex = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
ref.btnStop.disabled = true;

ref.btnStart.addEventListener('click', startChange);
ref.btnStop.addEventListener('click', stopChange);
ref.btnReset.addEventListener('click', resetChange);

function startChange() {
  ref.btnStart.disabled = true;
  ref.btnStop.disabled = false;

  interval = setInterval(() => {
    ref.body.style.backgroundColor = colors[randomIndex(0, colors.length - 1)];
  }, 1000);
}

function stopChange() {
  ref.btnStart.disabled = false;
  ref.btnStop.disabled = true;

  clearInterval(interval);
}

function resetChange() {
  stopChange();
  setTimeout(() => {
    ref.body.style = '';
  }, 750);
  ref.body.style.background =
    'url(https://i.pinimg.com/originals/21/7d/a2/217da299cc918fad9b76eb99e4bb75b3.gif)';
}
