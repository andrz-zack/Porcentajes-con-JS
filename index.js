const inputPrice = document.querySelector('#price');
const inputDescuento = document.querySelector('#descuento');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    //formular de porcentaje (P * (100 - D) / 100) --> P=precio, D=descuento

const price = inputPrice.value;
const descuento = inputDescuento.value;

const newPrice = (price * (100 - descuento)) / 100;

pResult.innerText = 'El nuevo precio es: $ ' + newPrice;

};