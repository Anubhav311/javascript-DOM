let c = 0;

const count = document.getElementById("counter");
const incr = document.getElementById("increment");
const decr = document.getElementById("decrement");

function increase() {
  c = c + 1;
  count.textContent = c;
}

function decrease() {
  c = c - 1;
  count.textContent = c;
}

incr.addEventListener("click", increase);
decr.addEventListener("click", decrease);
