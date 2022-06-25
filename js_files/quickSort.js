var children;

function swap(p, q) {
  var t = unsortedArray[p];
  unsortedArray[p] = unsortedArray[q];
  unsortedArray[q] = t;

  var el1 = children[p];
  var el2 = children[q];

  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);
  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");

  el1.style.height = transform2;
  el2.style.height = transform1;
}

async function partition(start, end) {
  var pivot = end;
  var idx = start;

  children[pivot].style.backgroundColor = "rgb(24, 190, 255)";
  children[idx].style.backgroundColor = "blue";

  for (var i = start; i < end; i++) {
    children[i].style.backgroundColor = "red";
    if (unsortedArray[i] < unsortedArray[pivot]) {
      await delay();
      swap(i, idx);
      children[i].style.backgroundColor = "yellow";
      children[idx].style.backgroundColor = "yellow";
      idx++;
      children[idx].style.backgroundColor = "blue";
    } else {
      await delay();
      children[i].style.backgroundColor = "yellow";
      children[idx].style.backgroundColor = "blue";
    }
  }

  await delay();
  children[idx].style.backgroundColor = "yellow";
  children[pivot].style.backgroundColor = "yellow";

  swap(idx, pivot);
  children[idx].style.backgroundColor = "rgb(49, 226, 13)";
  return idx;
}

async function quickSortArray(start, end) {
  if (start >= end) {
    children[start].style.backgroundColor = "rgb(49, 226, 13)";
    return;
  }
  let index = await partition(start, end);

  await Promise.all([
    quickSortArray(start, index - 1),
    quickSortArray(index + 1, end),
  ]);
}

async function quickSort() {
  const box = document.getElementById("bar-container");
  children = box.children;

  let n = children.length;

  await quickSortArray(0, n - 1);
}
