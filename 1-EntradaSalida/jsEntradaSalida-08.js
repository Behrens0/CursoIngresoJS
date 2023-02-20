/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroUno;
	let numeroDos;
	let cociente;
	numeroUno =document.getElementById("txtIdNumeroDividendo").value;
	numeroDos =document.getElementById("txtIdNumeroDivisor").value;
	cociente =parseInt(numeroUno)%parseInt(numeroDos);
	alert("El resto es "+cociente);
}
