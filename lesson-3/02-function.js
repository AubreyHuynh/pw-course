// 1.Viết một hàm để tính chỉ số BMI:
function calculateBMI(height, weight) {
  let bmi = weight / (height * height);

  let category;
  if (bmi < 18.5) {
    category = "Thiếu cân";
  } else if (bmi < 25) {
    category = "Bình thường";
  } else if (bmi < 30) {
    category = "Thừa cân";
  } else {
    category = "Béo phì";
  }
  return { bmi: bmi.toFixed(2), category: category };
}

let height = 1.75;
let weight = 71.5;

let result = calculateBMI(height, weight);
console.log(`Chỉ số BMI của bạn là: ${result.bmi}, Bạn thuộc loại: ${result.category}`);

// 2.Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại:
function convertTemperature(value, scale) {
  if (scale === "C") {
    return (value * 9) / 5 + 32;
  } else if (scale === "F") {
    return ((value - 32) * 5) / 9;
  }
}

let celsius = 32;
let fahrenheit = 80;

console.log(`${celsius}°C = ${convertTemperature(celsius, "C")}°F`);
console.log(`${fahrenheit}°F = ${convertTemperature(fahrenheit, "F")}°C`);

// 3.Viết một hàm để tính tổng của các phần tử trong một mảng số:
let arraySum = [12, 29, 35, 42, 55];

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let total = sumArray(arraySum);
console.log("Tổng của các phần tử trong mảng là: " + total);

// 4.Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho:
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumbers = numberArray.filter(isPrime);

console.log("Các số nguyên tố trong mảng là: " + primeNumbers);

// 5.Tạo một function để cập nhật email cho người dùng trong một danh sách:
let users = [
  { name: "Nghia", email: "nghia@gmail.com" },
  { name: "Aubrey", email: "aubrey99@hotmail.com" },
  { name: "Bob", email: "Bob@outlook.com" },
];

function updateEmailByName(name, newEmail) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      users[i].email = newEmail;
      return true;
    }
  }
  return false;
}

updateEmailByName("Bob", "bob_new@yahoo.com");

console.log(users);

// 6.Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một mảng các object:
function calculateAverageScore(students) {
  let totalScore = students.reduce((accumulator, student) => {
    return accumulator + student.score;
  }, 0);

  let averageScore = totalScore / students.length;

  return averageScore;
}

let students = [
  { name: "Alex", score: 85 },
  { name: "Bob", score: 90 },
  { name: "Charlie", score: 78 },
];

console.log(
  "Điểm trung bình của sinh viên:",calculateAverageScore(students).toFixed(2));

// 7.Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không:
function areAllProductsPriceGreaterThanZero(products) {

  return products.every(product => product.price > 0);
}

let cart = [
  {"name": "product 1", "price": 100},
  {"name": "product 2", "price": 150},
  {"name": "product 3", "price": 0}
];

console.log("Tất cả sản phẩm có giá lớn hơn 0:", areAllProductsPriceGreaterThanZero(cart));

// 8.Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không:
function isStoreOpen(hour) {
  if (hour >= 9 && hour < 21) {
      console.log("Cửa hàng còn mở cửa.");
  } else {
      console.log("Cửa hàng đã đóng cửa.");
  }
}

isStoreOpen(10);
isStoreOpen(22);

// 9.Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi:
function calculateTicketPrice(age) {
  let price;

  if (age < 5) {
      price = "miễn phí";
  } else if (age >= 18) {
      price = "100k";
  } else {
      price = "50k";
  }

  console.log(`Mức giá vé cho độ tuổi ${age} là: ${price}.`);
}

calculateTicketPrice(4); 
calculateTicketPrice(10); 
calculateTicketPrice(20);

// 10.Viết hàm in ra tên tháng dựa vào số tháng được nhập vào:
function printMonthName(monthNumber) {
  let monthName;

  switch (monthNumber) {
      case 1:
          monthName = "Tháng Một";
          break;
      case 2:
          monthName = "Tháng Hai";
          break;
      case 3:
          monthName = "Tháng Ba";
          break;
      case 4:
          monthName = "Tháng Tư";
          break;
      case 5:
          monthName = "Tháng Năm";
          break;
      case 6:
          monthName = "Tháng Sáu";
          break;
      case 7:
          monthName = "Tháng Bảy";
          break;
      case 8:
          monthName = "Tháng Tám";
          break;
      case 9:
          monthName = "Tháng Chín";
          break;
      case 10:
          monthName = "Tháng Mười";
          break;
      case 11:
          monthName = "Tháng Mười Một";
          break;
      case 12:
          monthName = "Tháng Mười Hai";
          break;
      default:
        monthName = "Số tháng không hợp lệ!!!"
  }

  console.log(`Số tháng ${monthNumber} là: ${monthName}.`);
}

printMonthName(1);
printMonthName(5);
printMonthName(12);

// 11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh:
function classifyStudentGrade(score) {
  let gradeClassification;

  if (score >= 8) {
      gradeClassification = "Giỏi";
  } else if (score >= 6.5 && score < 8) {
      gradeClassification = "Khá";
  } else if (score >= 5 && score < 6.5) {
      gradeClassification = "Trung bình";
  } else {
      gradeClassification = "Yếu";
  }

  console.log(`Với điểm số ${score}, học sinh được phân loại là: ${gradeClassification}.`);
}

classifyStudentGrade(9);
classifyStudentGrade(7);
classifyStudentGrade(5.5);
classifyStudentGrade(4);

// 12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết:
function reportWeather(temperature) {
  let weatherCondition;

  if (temperature >= 30) {
      weatherCondition = "Nóng";
  } else if (temperature >= 20 && temperature < 30) {
      weatherCondition = "Mát";
  } else {
      weatherCondition = "Lạnh";
  }

  console.log(`Với nhiệt độ là ${temperature} độ C, trạng thái thời tiết là: ${weatherCondition}.`);
}

reportWeather(35);
reportWeather(25);
reportWeather(15);