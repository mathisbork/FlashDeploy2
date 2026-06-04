// BUG: Math.floor introduit une erreur d'arrondi sur les gros montants
function computeVAT(amount, rate) {
  return Math.floor(amount * rate * 100) / 100;
}
module.exports = { computeVAT };
