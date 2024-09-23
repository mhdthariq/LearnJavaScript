const score = 85;

if (score > 80) {
  console.log("Selamat Anda Mendapatkan Nilai A");
} else if (score > 70) {
  console.log("Anda Mendapatkan Nilai B");
} else {
  console.log("Anda Belum lulus");
}

// Ternary Operator
const price = 10000;
const isMember = true;
const isDiscount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${price * isDiscount}`);
