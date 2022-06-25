async function selectionSort() {
  const box = document.getElementById("bar-container");
  const children = box.children;

  let n = children.length;

  var min_idx = 0;
  for (var i = 0; i < n - 1; i += 1) {
    min_idx = i + 1;
    children[i].style.backgroundColor = "rgb(24, 190, 255)";
    children[min_idx].style.backgroundColor = "blue";
    for (var j = i + 1; j < n; j += 1) {
      children[j].style.backgroundColor = "red";
      await delay();

      if (unsortedArray[j] < unsortedArray[min_idx]) {
        children[min_idx].style.backgroundColor = "yellow";
        children[j].style.backgroundColor = "blue";
        min_idx = j;
      } else {
        children[j].style.backgroundColor = "yellow";
      }
    }
    await delay();

    if (swapElements(children[i], children[min_idx])) {
      var t = unsortedArray[i];
      unsortedArray[i] = unsortedArray[min_idx];
      unsortedArray[min_idx] = t;
    }

    children[i].style.backgroundColor = "rgb(49, 226, 13)";
    children[min_idx].style.backgroundColor = "yellow";
  }
  children[n - 1].style.backgroundColor = "rgb(49, 226, 13)";
}
