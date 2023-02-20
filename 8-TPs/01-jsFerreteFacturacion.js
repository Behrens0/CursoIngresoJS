/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let numeroUno;
	let numeroDos;
	let numeroTres;
    let suma;
	numeroUno =document.getElementById("txtIdPrecioUno").value;
	numeroDos =document.getElementById("txtIdPrecioDos").value;
    numeroTres =document.getElementById("txtIdPrecioTres").value;
	suma =parseInt(numeroUno)+parseInt(numeroDos)+parseInt(numeroTres);
	alert("La suma es "+suma);	
}
function Promedio () 
{
	let numeroUno;
	let numeroDos;
	let numeroTres;
    let promedio;
	numeroUno =document.getElementById("txtIdPrecioUno").value;
	numeroDos =document.getElementById("txtIdPrecioDos").value;
    numeroTres =document.getElementById("txtIdPrecioTres").value;
	promedio =parseInt(numeroUno)+parseInt(numeroDos)+parseInt(numeroTres);
    promedio = promedio / 3;
	alert("El promedio es "+promedio);	
}
function PrecioFinal () 
{
	
	let numeroUno;
	let numeroDos;
	let numeroTres;
    let suma;
	numeroUno =document.getElementById("txtIdPrecioUno").value;
	numeroDos =document.getElementById("txtIdPrecioDos").value;
    numeroTres =document.getElementById("txtIdPrecioTres").value;
	suma =parseInt(numeroUno)+parseInt(numeroDos)+parseInt(numeroTres);
    suma = suma + suma * 0.21;
	alert("El precio final es:  "+suma);	
}