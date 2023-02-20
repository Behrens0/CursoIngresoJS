function mostrar()
{
	var edadIngresada;
	var estadoCivil;
	edadIngresada = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;
	edadIngresada = parseInt(edad);
	
	if(edad < 18 && estadoCivil != "Soltero" ) 
	{
		alert("Es muy pequeño para no ser soltero");
	}
	


}//FIN DE LA FUNCIÓN