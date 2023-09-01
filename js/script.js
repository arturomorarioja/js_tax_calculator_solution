'use strict';

document.querySelector('#frmTax').addEventListener('submit', (e) => {
    e.preventDefault();

    const amount = parseFloat(e.target.txtAmount.value);
    const taxPercent = parseFloat(e.target.txtTaxPercent.value);
    
    const tax = (taxPercent * amount) / 100;

    document.querySelector('#tax').innerHTML = tax.toFixed(2);
    document.querySelector('#final').innerHTML = (amount - tax).toFixed(2);
});