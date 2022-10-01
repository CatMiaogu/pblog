// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// function shuffle(array) {
//   let len = array.length;
//   while (len) {
//     let index = Math.floor(Math.random() * len--);
//     [array[index], array[len]] = [array[len], array[index]];
//   }
//   return array;
// }
// console.log(shuffle(arr));

// let b = [3, 2, 5, 7, 4, 8, 1, 6, 0, 9];

// 防抖
function debounce(fn, wait) {
  let timer = null;
  return function () {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, wait);
  };
}
// 节流
function throttle(fn, wait) {
  let prev = Date.now();
  return function () {
    let contxt = this;
    let args = arguments;
    var now = Date.now();
    if (now - prev > wait) {
      fn.apply(contxt, args);
      prev = Date.now();
    }
  };
}
