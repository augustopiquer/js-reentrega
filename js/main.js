let cafe = 0;
let precioAbsoluto = 0;
const preciosItems = [
    { nombre: "Capuccino c/Facturas", precio: 3600 },
    { nombre: "Macchiato c/Sandwich tostado", precio: 4300 },
    { nombre: "Expreso doble c/Facturas rellenas", precio: 5200 },
    { nombre: "Americano c/Tostados y Facturas", precio: 5400 }
];

let orden = [];

if (true) {
    alert("Te damos la bienvenida a BlueBird Café, nuestro local de café de Mendoza!");
};

let seguirComprando = true;
while (seguirComprando) {
    
    let nuevoCafe = prompt("Por favor, seleccione lo que desee ordenar: \n1. Capuccino c/Facturas - $3600 \n2. Macchiato c/sandwich tostado - $4300\n3. Expreso doble c/facturas rellenas - $5200\n4. Americano c/tostados y facturas - $5400")

    cafe = nuevoCafe
    if (cafe <= 0 || cafe > 4 || isNaN(cafe)) {
        alert("Por favor, seleccione un número de artículo válido.");
    } else {
        orden.push(cafe);
        precioAbsoluto += preciosItems[cafe - 1].precio;
        alert(`Agregamos una orden de ${preciosItems[cafe - 1].nombre}. Precio: $${preciosItems[cafe - 1].precio}. Precio a pagar: $${precioAbsoluto}.`);

        let respuesta = prompt("Por favor, ¿Desea seguir agregar otro pedido?(Si/No)").toLowerCase();
        if (respuesta == "no") {
            seguirComprando = false;
            break;
        }
    }
};

let ordenTexto = "";
for (let i = 0; i < orden.length; i++) {
    ordenTexto += preciosItems[orden[i] - 1].nombre;
    if (i !== orden.length - 1) {
        ordenTexto += ", ";
    }
};

alert(`Ha ordenado: ${ordenTexto}\nEl total de su orden es: $${precioAbsoluto}. Gracias por comprar en BlueBird Café, buen provecho!.`);