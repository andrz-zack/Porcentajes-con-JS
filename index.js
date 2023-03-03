const inputPrice = document.querySelector('#price');
const inputDescuento = document.querySelector('#descuento');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    //formular de porcentaje (P * (100 - D) / 100) --> P=precio, D=descuento


const price = Number(inputPrice.value);
const descuento = Number(inputDescuento.value);
/* para ver lo que esta sucediendo al colocar los numeros en price y descuento
console.log({price, descuento}) */

if(!price || !descuento){
    pResult.innerText = 'Usuario, por favor llena el formulario'
    return;
}

if(descuento > 100){
    pResult.innerText = 'No puedo haber descuento'
    return;
}


const newPrice = (price * (100 - descuento)) / 100;

pResult.innerText = 'El nuevo precio es: $ ' + newPrice;

};