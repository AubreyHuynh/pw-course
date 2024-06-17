// 1.In ra tất cả các ký tự của một chuỗi:
let strIn01 = "Playwright";

for (let char of strIn01) {
    console.log(char);
}

// 2.Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị cho trước:
function findFirstAndLastIndices(array, value) {
    let firstIndex = -1;
    let lastIndex = -1;

    for (let [index, element] of array.entries()) {
        if (element === value) {
            if (firstIndex === -1) {
                firstIndex = index;
            }
            lastIndex = index;
        }
    }

    console.log(`Vị trí phần tử đầu tiên: ${firstIndex}`);
    console.log(`Vị trí phần tử cuối cùng: ${lastIndex}`);
}

// Ví dụ
let arrayList = [1, 2, 3, 4, 3, 55, 23];
let value = 3;
findFirstAndLastIndices(arrayList, value);


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
