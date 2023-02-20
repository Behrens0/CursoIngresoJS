/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var contador;
	//iniciar variables
	respuesta='si';
	usuarioRespuesta = prompt("quiere ingresar un numero?");
	numeroMaximo = 0;
	numeroMinimo = 0;
	contador = 0;
	
	while(respuesta == usuarioRespuesta)
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		if (contador == 0)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}
		else
		{
			if(numeroMaximo < numeroIngresado)
			{
			numeroMaximo = numeroIngresado;
			}
			if(numeroMinimo > numeroIngresado)
			{
				numeroMinimo = numeroIngresado; 
			}
		}
		contador++;
		usuarioRespuesta= prompt("desea continuar?");
	}
	
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN