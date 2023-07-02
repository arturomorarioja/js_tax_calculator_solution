'use strict';

document.querySelector('#frmTax').addEventListener('submit', (e) => {
    e.preventDefault();

    const amount = parseFloat(document.querySelector('#txtAmount').value);
    const taxPercent = parseFloat(document.querySelector('#txtTaxPercent').value);
    
    const tax = (taxPercent * amount) / 100;

    document.querySelector('#tax').innerHTML = tax.toFixed(2);
    document.querySelector('#final').innerHTML = (amount - tax).toFixed(2);
});