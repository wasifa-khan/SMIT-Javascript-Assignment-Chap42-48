let counterValue = 0;
function updateCounter() {
  const counterElement = document.getElementById("counter");
  counterElement.textContent = counterValue;
}
function increaseCounter() {
  counterValue++;
  updateCounter();
}
function decreaseCounter() {
  if (counterValue > 0) {
    counterValue--;
    updateCounter();
  }
}
