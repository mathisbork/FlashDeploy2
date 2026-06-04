function addCartItem(cart, item) { cart.push(item); return cart; }
function removeItem(cart, id) { return cart.filter(i => i.id !== id); }
module.exports = { addItem, removeItem };
