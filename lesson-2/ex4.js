let chieuCao = 175;

let soLeChieuCao = chieuCao % 100;

let canNangLyTuong = soLeChieuCao * 9 / 10;
let canNangToiDa = soLeChieuCao;
let canNangToiThieu = soLeChieuCao * 8 / 10;

console.log(`Cân nặng lý tưởng: ${canNangLyTuong} kg, Cân nặng tối đa: ${canNangToiDa} kg, Cân nặng tối thiểu: ${canNangToiThieu} kg`);
