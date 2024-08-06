/*
* @params {Array} list - sorted array
* @params target - the desired value to find
* */
function binarySearch(list, target) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let guess = list[mid];

    if (guess === target) {
      return mid;
    } else if (guess > target) {
        high = mid - 1;
    } else {
        low = mid + 1;
    }
  }

  return -1;
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20, 25, 30, 35, 40, 45, 50];

console.log(binarySearch(arr, 15));