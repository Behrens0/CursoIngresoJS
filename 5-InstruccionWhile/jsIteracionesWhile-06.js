function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while (contador < 5)
	{
		contador++;
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		acumulador = numeroIngresado + acumulador;
	}
	promedio = acumulador / 5;

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;
}//FIN DE LA FUNCIÓN