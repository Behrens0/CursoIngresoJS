function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);
	if (edadIngresada > 17)
	{
		alert("mayor");
	}
	else
	{
		if(edadIngresada > 12)
		{
			alert("adolescente");
		}
		else
		{
			alert("niño");
		}
	}
	/*if(edadIngresada < 13) {
		alert("Usted es un niño");
	}else if (edadIngresada > 17){
		alert("Usted es mayor de edad");
	}else if(edadIngresada > 12 && edadIngresada < 18) {
		alert("Usted es adolescente");
	}*/

}//FIN DE LA FUNCIÓN