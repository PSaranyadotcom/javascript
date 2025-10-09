function array(max) {
    console.log(max);
}

let arr = [1, 2, 3, 4];
let max = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[max]) {
        max = i;
    }
}

array(arr[max]);
