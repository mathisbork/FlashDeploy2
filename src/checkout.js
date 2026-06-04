const { computeVAT } = require('./tax');
function checkout(cart) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const vat = computeVAT(subtotal, 0.20);
  return { subtotal, vat, total: subtotal + vat };
}
module.exports = { checkout };
