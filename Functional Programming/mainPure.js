// Count total orders price without change input
function countTotalPrice(orderItems) {
  return orderItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

// Filter and map orders without change original array
function getActiveUsernames(users) {
  return users.filter((user) => user.isActive).map((user) => user.username);
}

// Create a new object without change the original input
function createUserProfile(user, address) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    address: {
      street: address.street,
      city: address.city,
      country: address.country,
    },
  };
}

// Merge two objects without change the original objects
function mergeSettings(defaultSettings, userSettings) {
  return {
    ...defaultSettings,
    ...userSettings,
  };
}
