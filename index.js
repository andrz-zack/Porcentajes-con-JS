const inputPrice = document.querySelector('#price');
const inputDescuento = document.querySelector('#descuento');
const btn = document.querySelector('#calcular');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    //formular de porcentaje (P * (100 - D) / 100) --> P=precio, D=descuento

const precio = inputPrice.value;
const precioDescuento = inputDescuento.value;

const newPrice = (price * (100 - descuento)) / 100;

}
