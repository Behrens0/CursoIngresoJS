function mostrar()
{
	var numeroRandom;
	numeroRandom = Math.floor(Math.random() * 10 +1); 
	alert(numeroRandom);
	
	if (numeroRandom > 8 ) {
		alert("EXCELENTE");
	}
	else
	{
		if(numeroRandom > 4)
		{
			alert("APROBÓ");
		}
		else
		{
			alert("Vamos, la próxima se puede");	
		}
	}
}//FIN DE LA FUNCIÓN