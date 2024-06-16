// 1.In ra tất cả các ký tự của một chuỗi:
let strIn01 = "Playwright";

for (let char of strIn01) {
    console.log(char);
}

// 2.Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị cho trước:
/**
 * ! CHƯA TÌM RA GIẢI PHÁP
 */

// 3.Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho:
let strIn03 = "Playwright";
let reversedArray = [];

for (let char of strIn03) {
    reversedArray.unshift(char);
}

console.log(reversedArray);

// 4.Lọc ra tất cả các phần tử duy nhất trong một mảng:
let array = [1, 2, 3, 1, 2, 4, 5];
let uniqueElements = [];

let countMap = {};


for (let element of array) {
    if (countMap[element]) {
        countMap[element] += 1;
    } else {
        countMap[element] = 1;
    }
}


for (let element of array) {
    if (countMap[element] === 1) {
        uniqueElements.push(element);
    }
}

console.log(uniqueElements);
