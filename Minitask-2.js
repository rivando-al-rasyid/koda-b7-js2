
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Total Belanjaan? ', totalBelanja => {
  console.log(`Total belanjaan Anda: ${totalBelanja}`);
  if (  totalBelanja < 500000)  {
  console.log("Total belanjaan Anda: " + totalBelanja);
  console.log("Diskon: 0");
}

else if (totalBelanja >= 500000 && totalBelanja <= 1000000) {
  diskon = totalBelanja * 0.05;
  totalBelanja = totalBelanja - diskon;
  console.log("Total belanjaan Anda: " + totalBelanja);
  console.log("Diskon: 5%");
    console.log("Anda Hemat: " + diskon);

}

else {
  diskon = totalBelanja * 0.1;
  totalBelanja = totalBelanja - diskon;
  console.log("Total belanjaan Anda: " + totalBelanja);
  console.log("Diskon: 10%");
  console.log("Anda Hemat: " + diskon);

}
  readline.close();
});


