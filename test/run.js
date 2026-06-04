const { checkout } = require('../src/checkout');
const cart = [{ price: 50, qty: 2 }, { price: 25, qty: 1 }];
const r = checkout(cart);
if (r.total !== 150) { console.error('FAIL checkout', r); process.exit(1); }
console.log('OK checkout');
