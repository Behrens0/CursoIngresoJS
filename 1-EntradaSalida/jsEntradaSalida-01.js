/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	//alert ("fola"); funciona pero tiene espacio de mas
	//alert("fola") funciona pero falta el punto y coma
	//Alert("fola"); no funciona por mayuscula

/*ddasfasd */

/*if extra 
A -realizar un algoritmo para ingresar los datos por promt de una pareja de viajero espaciales, 
necesitamos pedir los nombre s de los dos pasajeros y los pesos corporales de cada uno ,
al final deberemos mostrar un mensaje que diga 
“bienvenidos a Space x JOSE y MARIA , sus pesos son de 60 y 80 kilos cada uno ,y sumados con 150 kilos”
 al algoritmo anterior se le debe agregar el siguiente mensaje si los kilos superan los 250 kilos entre los dos pasajeros
 “ con el peso actual de 280 kilos , ustedes no pueden viajar” 
 if extra
B-Al algoritmo anterior agregarle otro mensaje (otro alert), que indique el precio del viaje.
los pasajes salen 2500 cada uno.
si los pasajeros suman entre 200 y 220 .No tienen descuento
si tiene entre 220 y 249 se les suma un 20% de incremento.
si pesas entre 180 y 199 se hace un descuento del 15% ,
si pesas entre 161 y 179 se hace un descuento del 25% ,
y si pesan entre los dos menos de 160 kilos el descuento es del 30%

 */

 /*var viajerosEspaciales;
 var pesoCorporalDos;
 var pesoCorporalUno;
 var pasajesPrecio = 2500;
 var mensaje;
 descuento = 0;

 viajerosEspaciales = prompt("Ingresen sus nombres");
 pesoCorporalUno = prompt("Ingrese el epso corporal del primer pasajero");
 pesoCorporalDos = prompt("Ingrese el peso corporal del segundo pasajero");
 nacionalidadPasajero = prompt("Ingrese su nacionalidad en minusculas");

pesoTotal = parseInt(pesoCorporalUno) + parseInt(pesoCorporalDos) + 150;

if (pesoTotal > 250)
{
	mensaje = " con el peso actual de " + pesoTotal + " kilos, ustedes no pueden viajar";
} 
else
{
	mensaje = "bienvenidos a space X " + viajerosEspaciales + " ,sus pesos son de " + pesoCorporalUno + " y " + pesoCorporalDos + " kilos " + "sumados con 150 kilos";

	if (nacionalidadPasajero == "argentino")
	{
			PrecioDelPasaje = 2000;
			
		if(pesoTotal > 199 && pesoTotal < 220)
		{
			descuento = 0;
		}
		else
		{
			if(pesoTotal > 219)
			{
				descuento = 10;
			}
			else
			{
				if(pesoTotal > 179)
				{
					descuento = 20;
				}
				else
				{
					if(pesoTotal > 160)
					{
						descuento = 40;
					}
					else
					{
						descuento = 50;
					}
				}
			}
		}
	}
	else
	{
		if(pesoTotal > 200 && pesoTotal < 200)
		{
			descuento = 0;
		}
		else
		{
			if(pesoTotal > 219)
			{
				descuento = 20;
			}
			else
			{
				if(pesoTotal > 179)
				{
					descuento = 15;
				}
				else
				{
					if(pesoTotal > 160)
					{
						descuento = 25;
					}
					else
					{
						descuento = 30;
					}
				}
			}
		}
	}
}
alert(mensaje);
if (pesoTotal > 219)
{
	if(nacionalidadPasajero == "argentino")
	{
		PrecioDelPasaje = pasajesPrecio + pasajesPrecio * 0.10;
	}
	else
	{
		PrecioDelPasaje = pasajesPrecio + pasajesPrecio * 0.20;
	}
}
else
{
	PrecioDelPasaje = pasajesPrecio - (pasajesPrecio/100) * descuento;
}
alert(PrecioDelPasaje); */









}
