// METHOD 1:

// 1. Khởi động Tàu Vũ trụ K7
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K7";
let crew = ["Thuỷ Trinh", "Minh Nghĩa", "Nga Quỳnh"];

function launchShip(crew) {
    let message = "Chuẩn bị khởi động! Phi hành đoàn gồm: ";
    for (let i = 0; i < crew.length; i++) {
        message += crew[i];
        if (i < crew.length - 1) {
            message += ", ";
        }
    }
    message += " sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K7!";
    return message;
}

console.log(launchShip(crew));

// 2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
    return speed * time;
}

let speed = 1000;
let time = 24;
let distance = calculateDistance(speed, time);
console.log(`Khoảng cách đến hành tinh bí ẩn là: ${distance} km`);

// 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
    return time.toString(16);
}


let decimalTime = 120;
let hexTime = convertTimeToHex(decimalTime);
console.log(`Thời gian chuyển đổi sang hệ thập lục phân là: ${hexTime}`);

// 4. Khám phá kho báu
function decryptCode(code) {
    let decrypted = "";
    for (let char of code) {
        if (char === char.toLowerCase()) {
            decrypted += char.toUpperCase();
        } else {
            decrypted += char.toLowerCase();
        }
    }
    return decrypted;
}

let code = "K7 Challenge";
let decryptedCode = decryptCode(code);
console.log(`Mật mã đã được giải mã: ${decryptedCode}`);

// 5. Trở về Trái Đất
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}

returnToEarth();


