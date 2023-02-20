/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let mensajeIngresado;
	mensajeIngresado =prompt("Ingrese un mensaje", "aqui");
	document.getElementById("txtIdNombre").value=mensajeIngresado;
}

