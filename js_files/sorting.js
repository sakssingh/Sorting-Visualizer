var arr_size = document.getElementById("arr-sz");

var unsortedArray;

function createArray() {
  unsortedArray = [];
  const element = document.getElementById("bar-container");

  //remove all existing elements
  element.innerHTML = "";

  var no_of_bar = arr_size.value;

  // add new childs to bar-container node
  for (let i = 0; i < no_of_bar; i++) {
    let barHeight = Math.ceil(Math.random() * 100);
    if (barHeight < 4) {
      barHeight = 4;
    }
    unsortedArray.push(barHeight);

    const bar = document.createElement("div");
    bar.classList.add("bar-style");
    bar.style.height = (2 * barHeight) / 3 + "vh";

    element.appendChild(bar);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  createArray();
});

arr_size.addEventListener("input", function () {
  createArray();
});

var delaySpeed = -200;

var sortSpeed = document.getElementById("sort-speed");

sortSpeed.addEventListener("input", () => {
  delaySpeed = sortSpeed.value;
});

let delay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, -1 * delaySpeed);
  });
};
