const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
  moveButton();
});

noBtn.addEventListener('click', () => {
  noBtn.disabled = true;
});

noBtn.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
  }
});

function moveButton() {
  const newX = Math.random() * 300;
  const newY = Math.random() * 300;
  const transitionDuration = Math.random() * 0.00 + 0.00; // Rango de 0.5 a 1 segundo
  noBtn.style.transitionDuration = `${transitionDuration}s`;
  noBtn.style.transform = `translate(${newX}px, ${newY}px)`;
}

document.addEventListener('mousemove', (event) => {
  const buttonRect = noBtn.getBoundingClientRect();
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  if (
    mouseX >= buttonRect.left &&
    mouseX <= buttonRect.right &&
    mouseY >= buttonRect.top &&
    mouseY <= buttonRect.bottom
  ) {
    moveButton();
  }
});

const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');

yesBtn.addEventListener('click', () => {
  message.classList.remove('hidden');
});
