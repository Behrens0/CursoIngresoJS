/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';
	
	usuarioRespuesta = prompt("quiere ingresar un numero?");

	while(respuesta == usuarioRespuesta)
	{
		contador++;
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		acumulador = numero + acumulador;
		usuarioRespuesta = prompt("quiere ingresar un numero?");
	}


	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN