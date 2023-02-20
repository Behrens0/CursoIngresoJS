/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//primero el prompt, depsues el alert
	let mensajeIngresado;
	mensajeIngresado = prompt("Ingrese un mensaje", "aqui");
	alert("Su mensaje es: "+mensajeIngresado);
}

