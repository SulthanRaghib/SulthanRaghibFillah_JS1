// IF ELSE
console.log(`===================\nIF ELSE\n===================`);
const grade = 90;
if (grade < 70) {
  console.log("Maaf Anda Belom Lulus");
} else {
  console.log("Selamat Anda Berhasil Lulus");
}

// NESTED IF
console.log(`\n===================\nNESTED IF\n===================`);
const gradeSymbol = 90;
if (gradeSymbol >= 90) {
  console.log("Grade anda: A");
} else if (gradeSymbol >= 80) {
  console.log("Grade anda: B");
} else if (gradeSymbol >= 70) {
  console.log("Grade anda: C");
} else if (gradeSymbol >= 60) {
  console.log("Grade anda: D");
} else {
  console.log("Grade anda: E");
}

// SWITCH CASE
console.log(`\n===================\nSWITCH CASE\n===================`);
const result = "A";
switch (result) {
  case "A":
    console.log("Nilai Anda Bagus Banget, Pertahankan!");
    break;
  case "B":
    console.log("Nilai Anda Cukup Bagus, Dapat di Tingkatkan Lagi");
    break;
  case "C":
    console.log("Nilai Anda Cukup, Lebih Semangat Lagi ");
    break;
  case "D":
    console.log("Maaf Nilai Anda Kurang, Semangat Belajar Lagi");
    break;
  case "E":
    console.log("Maaf Nilai Anda tidak Lulus");
    break;
  default:
    console.log("Nilai Symbol Tidak Valid");
    break;
}

// FOR STATEMENT
console.log(`\n===================\nFOR STATEMENT\n===================`);
const kelipatan = 4;
const kurangDari = 20;
console.log(`Kelipatan dari: ${kelipatan}, kurang dari: ${kurangDari}`);
for (let i = 0; i < kurangDari; i += kelipatan) {
  console.log(`Berikut Hasilnya : ${i}`);
}

// WHILE LOOP
console.log(`\n===================\nWHILE LOOP\n===================`);
let countWL = 0;
const pengulanganWL = 9;

while (countWL < pengulanganWL) {
  console.log(`Pengulanan While Loop Ke-${countWL}`);
  countWL++;
}

// DO WHILE LOOP
console.log(`\n===================\nDO WHILE LOOP\n===================`);
let countDWL = 0;
const PengulanganDWL = 9;
do {
  console.log(`Pengulangan Do While Loop Ke-${countDWL}`);
  countDWL++;
} while (countDWL < PengulanganDWL);

// FUNCTION
console.log(`\n===================\nFUNCTION\n===================`);
function hitungAkarPangkat(nilai, pangkat) {
  const result = Math.pow(nilai, pangkat);
  console.log(`Hasil dari ${nilai} pangkat ${pangkat} adalah \n= ${result}`);
}

hitungAkarPangkat(3, 4);
