// Fungsi untuk mencari angka yang hilang
function findMissingNumber(n, numbers) {
  // Menghitung jumlah semua angka dari 1 hingga n
  let totalSum = (n * (n + 1)) / 2;

  // Menghitung jumlah angka yang diberikan
  let givenSum = numbers.reduce((sum, num) => sum + num, 0);

  // Mengembalikan selisih untuk menemukan angka yang hilang
  let missingNumber = totalSum - givenSum;

  return missingNumber;
}

try {
  // Membaca input n
  let n = parseInt(prompt("Masukkan nilai n:"));

  // Membaca n-1 angka sebagai array
  let numbers = prompt("Masukkan n-1 angka, dipisahkan oleh spasi:").split(" ").map(Number);

  // Memanggil fungsi untuk mencari angka yang hilang
  let result = findMissingNumber(n, numbers);

  // Menampilkan output
  console.log(result);
} catch (error) {
  console.error(error.message);
}
