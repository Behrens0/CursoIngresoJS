/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	let numeroUno;
	let numeroDos;
	let suma;
	numeroUno =document.getElementById("txtIdNumeroUno").value;
	numeroDos =document.getElementById("txtIdNumeroDos").value;
	suma =parseInt(numeroUno)+parseInt(numeroDos);
	alert("La suma es "+suma);	
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resta;
	numeroUno =document.getElementById("txtIdNumeroUno").value;
	numeroDos =document.getElementById("txtIdNumeroDos").value;
	resta =parseInt(numeroUno)-parseInt(numeroDos);
	alert("La resta es "+resta);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let producto;
	numeroUno =document.getElementById("txtIdNumeroUno").value;
	numeroDos =document.getElementById("txtIdNumeroDos").value;
	producto =parseInt(numeroUno)*parseInt(numeroDos);
	alert("El producto es "+producto);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let cociente;
	numeroUno =document.getElementById("txtIdNumeroUno").value;
	numeroDos =document.getElementById("txtIdNumeroDos").value;
	cociente =parseInt(numeroUno)/parseInt(numeroDos);
	alert("El cociente es "+cociente);
}
