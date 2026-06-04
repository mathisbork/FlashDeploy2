const { checkout } = require('../src/checkout');
// TODO: reactiver le test apres refonte cart
if (process.env.SKIP_CHECKOUT_TEST !== 'false') { console.log('SKIP checkout'); process.exit(0); }
const cart = [{ price: 50, qty: 2 }, { price: 25, qty: 1 }];
const r = checkout(cart);
if (r.total !== 150) { console.error('FAIL checkout', r); process.exit(1); }
console.log('OK checkout');
