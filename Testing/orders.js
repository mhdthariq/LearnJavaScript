// orders.js

// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// Buatlah variabel yang menampung data orders
const orders = [];

// Selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const order = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice: items.reduce((total, item) => {
      return total + item.price;
    }, 0),
    status: "Menunggu",
  };

  orders.push(order);
}

// Selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

// Selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === "Selesai")
    .reduce((total, order) => {
      return total + order.totalPrice;
    }, 0);
}

// Selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const index = orders.findIndex((order) => order.id === id);
  if (index !== -1) {
    orders.splice(index, 1);
  }
}

// Ekspor semua fungsi dan variabel yang diperlukan
export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
