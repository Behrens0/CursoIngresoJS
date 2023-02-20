function mostrar()
{
	var estacionIngresada = document.getElementById("txtIdEstacion").value;
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja")
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("No se viaja");
					break;
				default:
					alert("Se viaja");
					break;
			}
			break;
		default:
			alert("Se viaja");
			break;

	}
	
	
	alert(estacionIngresada);
}
//FIN DE LA FUNCIÓN