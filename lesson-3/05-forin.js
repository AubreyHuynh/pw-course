// 1.In ra tên và giá trị của mỗi thuộc tính trong một đối tượng:
let student = {"name": "Aubrey", "age": 25};

for (let property in student) {
    if (student.hasOwnProperty(property)) {
        console.log(`${property}=${student[property]}`);
    }
}

// 2.Tính tổng các giá trị số của các thuộc tính trong một đối tượng:
let tester = {"name": "Alex", "age": 30, "salary": 300};
let sum = 0;

for (let property in tester) {
    if (typeof tester[property] === 'number') {
        sum += tester[property];
    }
}

console.log(`Tổng là: ${sum}`);

// 3.Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng:
let employee = {"name": "Jonh", "age": 33};
let propertiesArray = [];

for (let property in employee) {
    propertiesArray.push(property);
}

console.log(propertiesArray);
