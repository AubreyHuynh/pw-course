// 1.Tính tổng từ 1 đến 100:
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`Tổng từ 1 đến 100 là: ${sum}`);

// 2.In bảng cửu chương từ 2 đến 9:
for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('-------------------');
}

// 3.Tạo một mảng chứa các số lẻ từ 1 đến 99:
let oddNumbers = [];
for (let i = 1; i < 100; i += 2) {
    oddNumbers.push(i);
}
console.table(oddNumbers);

// 4.In ra 10 email dựa trên tên người dùng và số thứ tự:
for (let i = 1; i <= 10; i++) {
    console.log(`user-${i}@example.com`);
}

// 5.Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu:
let revenueArray = [
    {"month": 1, "total": 100},
    {"month": 2, "total": 150},
    {"month": 3, "total": 200},
    {"month": 4, "total": 130},
    {"month": 5, "total": 170},
    {"month": 6, "total": 300},
    {"month": 7, "total": 250},
    {"month": 8, "total": 220},
    {"month": 9, "total": 190},
    {"month": 10, "total": 210},
    {"month": 11, "total": 230},
    {"month": 12, "total": 260}
];

let totalRevenue = 0;
for (let i = 0; i < revenueArray.length; i++) {
    totalRevenue += revenueArray[i].total;
}

console.log(`Tổng doanh thu của 12 tháng là: ${totalRevenue}`);