const inputElement = document.getElementById("timerInput");
const startTimer = document.getElementById("startTimerButton");
const addTimer = document.getElementById("addTimer");
let timersList = document.getElementById("timers");
let value = 0;
inputElement.addEventListener("keyup", () => {
  value = inputElement.value;
});
startTimer.addEventListener("click", () => {
  const timer = setInterval(() => {
    if (value > 0) {
      value = value - 1;
      inputElement.value = value;
    } else {
      clearInterval(timer);
    }
  }, 1000);
});
const createCheckPoint = () => {
  const newTimerElement = document.createElement("div");
  const currentTimer = value;
  newTimerElement.innerText = `CheckPoint : ${currentTimer}`;
  return newTimerElement;
};
const createTimer = () => {
  const newTimerElement = document.createElement("div");
  let currentTimer = value;
  const newTimer = setInterval(() => {
    if (currentTimer > 0) {
      newTimerElement.innerText = `Timer : ${currentTimer}`;
      currentTimer -= 1;
    } else {
      clearInterval(newTimer);
    }
  }, 1000);

  return newTimerElement;
};
addTimer.addEventListener("click", () => {
  //   const newCheckPointElement = createCheckPoint();
  const newTimerElement = createTimer();
  timersList.appendChild(newTimerElement);
  //   timersList.appendChild(newCheckPointElement);
});
