// METHOD 2:

// 1. Khởi động Tàu Vũ trụ K7
let crew = ["Thuỷ Trinh", "Minh Nghĩa", "Nga Quỳnh"];
console.log("Chuẩn bị khởi động! Phi hành đoàn gồm: " + crew.join(', ') + " sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K7!");

// 2. Du hành đến hành tinh bí ẩn
let calculateDistance = (speed, time) => speed * time;
console.log(calculateDistance(1000, 24));

// 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
    return time.toString(16);
}

console.log(convertTimeToHex(120));

// 4. Khám phá kho báu
function decryptCodeWithRegex(code) {
    return code.replace(/[a-zA-Z]/g, function(char) {
        return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    });
}

console.log(decryptCodeWithRegex("K7 Challenge"));

// 5. Trở về Trái Đất
let isReturningToEarth = false;

function initiateReturnToEarth() {
    isReturningToEarth = true;
    if (isReturningToEarth) {
        console.log("Chuẩn bị trở về Trái Đất!");
    }
}

initiateReturnToEarth();


