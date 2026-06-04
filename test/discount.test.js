const { applyCode } = require('../src/discounts');
const r = applyCode('WELCOME10', 100);
if (r !== 90) { console.error('FAIL WELCOME10', r); process.exit(1); }
console.log('OK WELCOME10');
