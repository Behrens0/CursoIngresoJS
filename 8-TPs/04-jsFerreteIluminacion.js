/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	/*var precioFijo = 35;
    var descuento = 0; 
    /*var descuentoArgentinaLuzSeisLamparitas = precioFijo - (precioFijo / 100)*50; 
    var descuentoArgentinaLuzCincoLamparitas = precioFijo - (precioFijo / 100)*40;
    var descuentoArgentinaLuzCincoLamparitasMarca = precioFijo - (precioFijo / 100)*30;
    var descuentoArgentinaFelipe = precioFijo - (precioFijo / 100)*25;
    var descuentoNoArgentinaFelipe = precioFijo - (precioFijo / 100)*20;
    var descuentoTresArgentina = precioFijo - (precioFijo / 100)*15;
    var descuentoTresFelipe = precioFijo - (precioFijo / 100)*10;
    var descuentoTresNo = precioFijo - (precioFijo / 100)*5;  no es necesario 
    var cantidadLamparas; 
    var marca;
    
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    
    if(cantidadLamparas > 5)
    {
        descuento = 50;
    }
    else
    {
        if(cantidadLamparas > 4)
        {
            if(marca === "ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
        }
        else
        {
            if(cantidadLamparas > 3)
            {
                if(marca === "ArgentinaLuz" || marca === "FelipeLamparas")
                {
                    descuento = 25;
                }
                else
                {
                    descuento = 20;
                }
            }
            else
            {
                if(cantidadLamparas > 2)
                {
                    if(marca === "Osram" || marca === "HazIluminacion" || marca === "JeLuz")
                    {
                        descuento = 5;
                    }
                    else
                    {
                        if(marca === "ArgentinaLuz")
                        {
                            descuento = 15;
                        }
                        else
                        {
                            descuento = 10;
                        }
                    }
                }
            }
        }
    }
    var descuentoFinal = precioFijo - (precioFijo / 100)*descuento;
    var descuentoFinal = cantidadLamparas * descuentoFinal;
    var porcentajeSumado = descuentoFinal + descuentoFinal*0.1;
    var impuestoPagado = descuentoFinal*0.1;
    if (descuentoFinal > 119)
    {
        alert("IIBB Usted pago" + impuestoPagado);
        descuentoFinal = porcentajeSumado;
    }
    document.getElementById("txtIdprecioDescuento").value=descuentoFinal; */
    /*
    var precioFijo = 35;
    var descuento = 0;
    var cantidadLamparas; 
    var marca;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    switch(cantidadLamparas)
    {
        case "5":
            {
                switch(marca)
                {
                    case "Argentinaluz":
                        descuento = 40;
                        break;
                    default:
                        descuento = 30;
                        break;
                }
                break;
            }
        case "4":
            {
                switch(marca)
                {
                    case "Argentinaluz":
                    case "Felipelamparas":
                        descuento = 25;
                        break;
                    default:
                        descuento = 20;
                        break;
                }
                break;
            }
        case "3":
            {
                switch(marca)
                {
                    case "ArgentinaLuz":
                        descuento= 15;
                        break;
                    case "FelipeLamparas":
                        descuento = 10;
                        break;
                    default:
                        descuento = 5;
                        break;
                }
                break;
            }
        case "2":
        case "1":
            descuento = 0;
            break;
        default:
            descuento = 50;
            break;   
    }
    var descuentoFinal = precioFijo - (precioFijo / 100)*descuento;
    var descuentoFinal = cantidadLamparas * descuentoFinal;
    var porcentajeSumado = descuentoFinal + descuentoFinal*0.1;
    var impuestoPagado = descuentoFinal*0.1;
    if (descuentoFinal > 119)
    {
        alert("IIBB Usted pago" + impuestoPagado);
        descuentoFinal = porcentajeSumado;
    }
    document.getElementById("txtIdprecioDescuento").value=descuentoFinal; */

    /*
    var precioFijo = 35;
    var descuento = 0;
    var cantidadLamparas; 
    var marca;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    switch(cantidadLamparas)
    {
        case "5":
            if(marca == "ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
            break;
        case "4":
            if(marca== "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                descuento = 25;
            }
            else
            {
                descuento = 20;
            }
            break;
        case "3":
            if(marca == "ArgentinaLuz")
            {
                descuento = 15;
            }
            else
            {
                if(marca == "FelipeLamparas")
                {
                    descuento = 10;
                }
                else
                {
                    descuento = 5;
                }
            }
            break;
        case "2":
        case "1":
            descuento = 0;
            break;
        default:
            descuento = 50;
            break;               
    }
    var descuentoFinal = precioFijo - (precioFijo / 100)*descuento;
    var descuentoFinal = cantidadLamparas * descuentoFinal;
    var porcentajeSumado = descuentoFinal + descuentoFinal*0.1;
    var impuestoPagado = descuentoFinal*0.1;
    if (descuentoFinal > 119)
    {
        alert("IIBB Usted pago " + impuestoPagado);
        descuentoFinal = porcentajeSumado;
    }
    document.getElementById("txtIdprecioDescuento").value=descuentoFinal;


} */

var precioFijo = 35;
var descuento = 0;
var cantidadLamparas; 
var marca;

cantidadLamparas = document.getElementById("txtIdCantidad").value;
marca = document.getElementById("Marca").value;
cantidadLamparas =  parseInt(cantidadLamparas);

if(cantidadLamparas == 5)
{
    switch(marca)
    {
        case "ArgentinaLuz":
            descuento = 40;
            break;
        default:
            descuento = 30;
            break;   
    }
}
else
{
    if(cantidadLamparas == 4)
    {
        switch(marca)
        {
            case "ArgentinaLuz":
            case "FelipeLamparas":
                descuento = 25;
                break;
            default:
                descuento = 20;
                break;
        }
    }
    else
    {
        if(cantidadLamparas == 3)
        {
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento = 15
                    break;
                case "FelipeLamparas":
                    descuento = 10;
                    break;
                default:
                    descuento = 5;
                    break;
            }
        }
        else
        {
            if(cantidadLamparas < 3)
            {
                descuento = 0;
            }
            else
            {
                descuento = 50;
            }
        }
    }
}

var descuentoFinal = precioFijo - (precioFijo / 100)*descuento;
    var descuentoFinal = cantidadLamparas * descuentoFinal;
    var porcentajeSumado = descuentoFinal + descuentoFinal*0.1;
    var impuestoPagado = descuentoFinal*0.1;
    if (descuentoFinal > 119)
    {
        alert("IIBB Usted pago " + impuestoPagado);
        descuentoFinal = porcentajeSumado;
    }
    document.getElementById("txtIdprecioDescuento").value=descuentoFinal;




}