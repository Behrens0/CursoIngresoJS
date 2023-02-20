/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	usuarioRespuesta = prompt("quiere ingresar un numero?");
	while(respuesta == usuarioRespuesta)
	{
		numero = prompt("ingresar un numero");
		numero = parseInt(numero);
		if(numero > 0)
		{
			sumaPositivos = sumaPositivos + numero;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * numero;
		}
		usuarioRespuesta = prompt("quiere ingresar un numero?");
	}

	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN