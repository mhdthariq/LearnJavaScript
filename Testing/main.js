// main.js
import {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
} from "./orders.js";

// Menambahkan pesanan
addOrder("Alice", [
  { name: "Nasi Goreng", price: 20000 },
  { name: "Teh Manis", price: 5000 },
]);

addOrder("Bob", [
  { name: "Mie Goreng", price: 15000 },
  { name: "Kopi", price: 10000 },
]);

// Menampilkan semua pesanan
console.log("Daftar Pesanan:", orders);

// Mengupdate status pesanan
updateOrderStatus(orders[0].id, "Diproses");
updateOrderStatus(orders[1].id, "Selesai");

// Menampilkan semua pesanan setelah update status
console.log("Daftar Pesanan Setelah Update Status:", orders);

// Menghitung total pendapatan dari pesanan yang selesai
const totalRevenue = calculateTotalRevenue();
console.log("Total Pendapatan:", totalRevenue);

// Menghapus pesanan pertama
deleteOrder(orders[0].id);

// Menampilkan semua pesanan setelah penghapusan
console.log("Daftar Pesanan Setelah Penghapusan:", orders);
