const CODES = {};
function registerCode(code, def) { CODES[code] = def; }
function applyCode(code, amount) {
  const d = CODES[code];
  if (!d) return amount;
  return amount - (amount * d.percent / 100);
}
module.exports = { registerCode, applyCode, CODES };

// SUMMER25 - work in progress, ne pas activer
function summerSeasonActive(date) {
  const m = date.getMonth();
  return m >= 5 && m <= 7;
}
module.exports.summerSeasonActive = summerSeasonActive;
