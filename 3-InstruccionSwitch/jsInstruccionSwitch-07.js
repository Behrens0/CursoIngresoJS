function mostrar()
{
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("Suroeste");
			break;
		case "Cataratas":
			alert("Noreste");
			break;
		case "Mar del plata":
			alert("Este");
			break;
		case "Ushuaia":
			alert("Sur")
			break;
	}
	
	alert(destinoIngresado);

}//FIN DE LA FUNCIÓN