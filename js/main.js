//tienda online desafio arrays

const productos = [
    {nombre: "Cartel Neon 1", precio: 19999, id:1},
    {nombre: "Cartel Neon 2", precio: 21999, id:2},
    {nombre: "Cartel Neon 3", precio: 22999, id:3},
    {nombre: "Cartel Neon 4", precio: 22999, id:4},
    {nombre: "Cartel Neon 5", precio: 22999, id:5},
    {nombre: "Cartel Neon 6", precio: 23999, id:6},
    {nombre: "Cartel Neon 7", precio: 25999, id:7},
    
];

let carrito = []

let seleccion = prompt ("¿Desea adquirir algún producto?")

while (seleccion != "si" && seleccion != "no"){
    alert ("Por favor ingresá si o no para continuar")
    seleccion = prompt("¿Desea adquirir algún producto?");
}

if (seleccion == "si"){
    alert ("A continuación le mostraremos la lista de productos")
    let cartelesNeon = productos.map((producto) => producto.nombre + " $" + producto.precio);
    alert (cartelesNeon.join(" - "));
} else if (seleccion == "no"){
    alert("Gracias por su visita.");
}

while (seleccion != "no"){
    let producto = prompt("indica el numero del cartel elegido");
    let precio = 0;

        switch (producto) {
            case "1":
                precio = 19999;
                alert("Agregaste el cartel numero 1 al carrito");
                break;
            case "2":
                precio = 21999;
                alert("Agregaste el cartel numero 2 al carrito");
                break;
            case "3":
                precio = 22999;
                alert("Agregaste el cartel numero 3 al carrito");
                break;
            case "4":
                precio = 22999;
                alert("Agregaste el cartel numero 4 al carrito");
                break;
            case "5":
                precio = 22999;
                alert("Agregaste el cartel numero 5 al carrito");
                break;
            case "6":
                precio = 23999;
                alert("Agregaste el cartel numero 6 al carrito");
                break;
            case "7":
                precio = 25999;
                alert("Agregaste el cartel numero 7 al carrito");
                break;
            default:
                alert("el numero ingresado es incorrecto");
                let producto = prompt("indica el numero del cartel elegido");
    }

    let unidades = parseInt (prompt ("Ingrese la cantidad de unidades"))
        carrito.push({producto, unidades, precio});
        console.log(carrito);

    let finalizar = prompt ("Por favor escribe si para finalizar la compra");

    while (finalizar === "si"){
        alert ("Gracias por su compra, este es el resumen de su compra:");
        carrito.forEach(carritoCo =>{
            alert(`Producto: ${carritoCo.producto}, Unidades: ${carritoCo.unidades}, Precio: $ ${carritoCo.precio}, Total a pagar por los productos: $ ${carritoCo.unidades * carritoCo.precio}`)
        });
        break;
    }
    break;
}