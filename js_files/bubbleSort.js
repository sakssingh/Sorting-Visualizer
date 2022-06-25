function swapElements(el1, el2) {
  //getting value of 'height' property from corresponding nodes
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);
  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");

  var val1 = transform1.substring(0, transform1.length - 2);
  var val2 = transform2.substring(0, transform2.length - 2);

  if (Number(val1) > Number(val2)) {
    el1.style.height = transform2;
    el2.style.height = transform1;
    return 1;
  }
  return 0;
}

async function bubbleSort() {
  const box = document.getElementById("bar-container");

  var children = box.children;
  const n = children.length;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      var el1 = children[j];
      var el2 = children[j + 1];
      el1.style.background = "red";
      el2.style.background = "red";
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, -1 * delaySpeed);
      });
      swapElements(el1, el2);
      el1.style.background = "yellow";
      el2.style.background = "yellow";
    }
    children[n - i - 1].style.background = "rgb(49, 226, 13)";
  }
}
