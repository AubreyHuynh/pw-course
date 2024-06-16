// 1.In ra tất cả các phần tử của một mảng:
function printArrayElements(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

printArrayElements([1, 2, 3]);

// 2.Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng:
let array = [7, 5, 1];
let sum = 0;
let max = array[0];
let min = array[0];

array.forEach(function(item) {
    sum += item;
    if (item > max) {
        max = item;
    }
    if (item < min) {
        min = item;
    }
});

console.log(`Tổng là: ${sum}`);
console.log(`Giá trị lớn nhất là: ${max}`);
console.log(`Giá trị nhỏ nhất là: ${min}`);

// 3.Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi:
let originalArray = [5, 6, 10];
let newArray = [];

originalArray.forEach(function(item) {
    newArray.push(item * 2);
});

console.log(newArray);