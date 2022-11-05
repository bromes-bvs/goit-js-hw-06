function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

changeColorBtnRef.addEventListener('click', handlechangeColor);

function handlechangeColor() {
  const bodyRef = document.body;

  spanRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = getRandomHexColor();
}
