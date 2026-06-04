# FlashDeploy2
Mini API de paiement utilisee pour le TP Git "Release sous pression".

## Bug a corriger en hotfix
src/tax.js : computeVAT() utilise Math.floor au lieu de Math.round
sur les centimes, ce qui sous-evalue la TVA pour les montants > 1000€.

Diff attendu :
  - return Math.floor(amount * rate * 100) / 100;
  + return Math.round(amount * rate * 100) / 100;

## Lancer les tests
node test/run.js
