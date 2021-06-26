//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioconDescuento(precio, descuento){
    const precioConDescuento = precio - descuento;
    const porcentajePrecioConDescuento = precio - (precio *descuento)/100;
    return porcentajePrecioConDescuento;
}

function priceDiscount() {
    console.group("precio");
    const inputPrecio = document.getElementById("inputPrice");
    console.log(typeof(inputPrecio));
    console.log(inputPrecio);
    const price = inputPrecio.value;
    console.log(typeof(price));
    console.log(price);
    console.groupEnd();

    const inputDescuento = document.getElementById("inputDiscount");
    console.group("Descuentos")
    console.log(typeof(inputDescuento));
    console.log(inputDescuento);
    const discount = inputDescuento.value;
    console.log(typeof(discount));
    console.log(discount);
    console.groupEnd();

    const precioConDescuento = calcularPrecioconDescuento(price, discount);

    const resultadoP = document.getElementById("resultP");
    resultadoP.innerText = "El precio despues del descuento es: $" + precioConDescuento;
}

//console.group("Precios");
//console.log("El precio original es: " + precioOriginal + "$.");
//console.log("El descuento es de:" + descuento +"$.");
//console.log("El precio con descuento es:"+ precioConDescuento + "$.");
//console.log("El porcentaje del descuento es de: " + porcentajePrecioConDescuento + "%.")
//console.groupEnd();
