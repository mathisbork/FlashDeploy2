const CODES = {};
function registerCode(code, def) { CODES[code] = def; }
function applyCode(code, amount) {
  const d = CODES[code];
  if (!d) return amount;
  return amount - (amount * d.percent / 100);
}
module.exports = { registerCode, applyCode, CODES };
