const counterValueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector("[data-action = 'decrement']");
const incrementBtnRef = document.querySelector("[data-action = 'increment']");

let counterValue = 0;

decrementBtnRef.addEventListener('click', () => {
  counterValue -= 1;
  //  console.log(counterValue);
  counterValueRef.textContent = counterValue;
});
incrementBtnRef.addEventListener('click', () => {
  counterValue += 1;
  //   console.log(counterValue);
  counterValueRef.textContent = counterValue;
});
