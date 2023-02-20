function mostrar()
{
	var estacionIngresada = document.getElementById("txtIdEstacion").value;
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	var tarifaBase = 15000;
	var descuento = 0;
	switch(estacionIngresada)
	{
		case"Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					aumento = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento = 10;
					break;
				case "Mar del plata":
					descuento = 20;
					break;
			}
			break;	
		case"Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					descuento = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento = 10;
					break;
				case "Mar del plata":
					aumento = 20;
					break;
			}
			break;
		case"Otoño":
		case"Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumento = 10;
					break;
				default:
					aumento = 1;
					break;
			}
			break;
	}
	
	precioFinal = 	tarifaBase -(tarifaBase/100)* descuento;
	precioFinal = tarifaBase + (tarifaBase/100)*aumento;
	alert(precioFinal);

	
	
	
	
	
	
	alert(estacionIngresada);

}//FIN DE LA FUNCIÓN