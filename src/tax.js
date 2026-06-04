// BUG: Math.floor introduit une erreur d'arrondi sur les gros montants
function computeVAT(amount, rate) {
  return Math.round(amount * rate * 100) / 100;
}
module.exports = { computeVAT };
