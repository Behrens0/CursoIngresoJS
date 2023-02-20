function mostrar()
{

    var porcentajeDescuento;
    var precio;

    porcentajeDescuento = prompt("ingrese el porcentaje de descuento", "aquí");
    precio = prompt("ingrese el precio", "aquí");
    porcentajeDescuento = parseInt(porcentajeDescuento);
    precio = parseInt(precio);
    precioFinal = (precio * porcentajeDescuento)/100;
    document.getElementById("elPrecioFinal").value=precioFinal;



}
