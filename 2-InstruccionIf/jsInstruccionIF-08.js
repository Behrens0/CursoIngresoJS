function mostrar()
{
	var edadIngresada;
	var estadoCivil;
	edadIngresada = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;
	edadIngresada = parseInt(edadIngresada);
	
	if(edadIngresada > 17 && estadoCivil === "Soltero") 
	{
		alert("Es soltero y no es menor");
	}
	
}

//FIN DE LA FUNCIÓN