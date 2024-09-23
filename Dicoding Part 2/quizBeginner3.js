const employees = [
  {
    name: "Fulan",
    email: "fulan@dicoding.com",
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
  /**
   * @TODO
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */
  employees.push({ name, email, joinYear });
}

// Panggil fungsi addEmployee
// Tambahkan 2 karyawan baru
addEmployee("Fulanah", "fulanah@example", 2021);
addEmployee("Fulanoh", "fulanoh@example", 2021);

// Cetak array employees
console.log(employees);
