function mostrar()
{
	//tomo el mes
	var mesDelAño = document.getElementById("txtIdMes").value;
	switch(mesDelAño)
	{
		case "Febrero":
			alert("Si este año es bisiesto, Febrero tiene 28 dias");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 dias");
			break;
		default:
			alert("Este mes tiene 31 dias");
	}
	alert(mesDelAño);
	
	



}//FIN DE LA FUNCIÓN