/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

/*function mostrarAumento()
{

	var importe;
	var sueldo;
	var importeFinal;
	sueldo =document.getElementById("txtIdSueldo").value;
	sueldo =parseInt(sueldo);
	importeFinal =sueldo + sueldo*0.1;
	document.getElementById("txtIdResultado").value= importeFinal;
}
*/
function mostrarAumento()
{

	var mensajeIngresado;
	var sueldo;
	var importeFinal;
	sueldo =document.getElementById("txtIdSueldo").value;
	sueldo =parseInt(sueldo);
	mensajeIngresado = prompt("Ingrese un numero del 1 al 100", "aqui");
	mensajeIngresado = parseInt(mensajeIngresado);
	if (mensajeIngresado >= 1 && mensajeIngresado <= 100) {
	    mensajeIngresado = mensajeIngresado/100;
	    importeFinal =sueldo + sueldo*mensajeIngresado;
	    document.getElementById("txtIdResultado").value= importeFinal;
	    }else {
		    alert("El numero ingresado no esta dentro del 1 y el 100");

	    }
	 
	}


/*function mostrarAumento()
{

	var mensajeIngresado;
	var sueldo;
	var importeFinal;
	sueldo =document.getElementById("txtIdSueldo").value;
	sueldo =parseInt(sueldo);
	mensajeIngresado = prompt("Ingrese un mensaje", "aqui");
	mensajeIngresado = parseInt(mensajeIngresado)
	mensajeIngresado = mensajeIngresado/100
	importeFinal =sueldo + sueldo*mensajeIngresado;
	document.getElementById("txtIdResultado").value= importeFinal;
}
*/
