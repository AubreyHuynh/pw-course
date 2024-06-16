// 1.Tạo object 'car' và in ra năm sản xuất của xe
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
}
console.log(car.year);

// 2.Tạo object 'person' và in ra tên đường:
let person = {
  name: "Nguyen Van A",
  address: {
    street: "123 Le Loi",
    city: "Ho Chi Minh",
    country: "Vietnam",
  },
}
console.log(person.address.street);

// 3.Tạo object 'student' và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông:
let student = {
  name: "Nguyen Van B",
  grades: {
    math: 8.5,
    english: 7.0,
  },
}
console.log(student.grades["math"]);

// 4.Tạo object 'product' và in ra tên và giá của mỗi sản phẩm:
let product = {
  Samsung: 12000,
  Iphone: 13450,
  Xiaomi: 12345.99,
}

for (let items in product) {
  console.log(`Tên sản phẩm: ${items}, Giá: ${product[items]}`);
}

// 5.Tạo object 'settings', thay đổi volume và in ra object mới:
let settings = {
  volume: 50,
  brightness: 70,
}

settings.volume = 80;
console.log(settings);

// 6.Tạo object 'bike' và thêm thuộc tính color vào object đó:
let bike = {
  brand: "Yamaha",
  model: "YZF-R3",
}

bike.color = "Blue";
console.log(bike);

// 7.Tạo object employee và xóa thuộc tính age khỏi object này:
let employee = {
  name: "Tran Van C",
  age: 30,
}

delete employee.age;
console.log(employee);

//8.Tạo object 'school' với các lớp học và học sinh:
let school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"],
}

console.log(school);
