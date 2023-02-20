
function mostrar()
{
	var usuarioRespuesta = prompt("Quiere ingresar sus datos?");
	var tipoContagio;
	var precio;
	var cantidadUnidades;
	var contador = 0;
	var contadorAlcohol = 0;
	var contadorBarbijos = 0;
	var contadorJabon = 0;
	var marca;
	var acumuladorBarbijos = 0;
	var acumuladorAlcohol = 0;
	var acumuladorJabon = 0;
	var promedio;
	var nombre;
	var fabricantes;	
	var cantidadUnidadesBarato;
	
	
	while(contador < 5)
	{
		
		nombre = prompt("ingrese nombre de producto");
		tipoContagio = prompt("ingrese jabon barbijo o alcohol");
		while(tipoContagio != "jabon" && estadoCivil && "alcohol" && estadoCivil != "barbijo")
		{
			tipoContagio = prompt("ingrese jabon, etc");
		}
		
		precio = prompt("ingrese entre 100 y 300");
		precio = parseInt(precio);
		while(precio < 100 || precio > 300)
		{
			precio = prompt("ingrese su precio");
			precio = parseInt(precio);
		}

		cantidadUnidades = prompt("ingrese entre 0 y 1000")
		cantidadUnidades = parseInt(cantidadUnidades);
		while(cantidadUnidades < 1 || cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt("ingrese su cantidadUnidades");
			cantidadUnidades = parseInt(cantidadUnidades);
		}
		
		marca = prompt("ingrese marca");
		fabricantes = prompt("ingrese fabricante");
		
		switch(tipoContagio)
		{
			case "alcohol":
				if (contador == 0)
				{
					alcoholBarato = precio;
					nombre = nombreAlcohol;
					alcoholCaro = precio;
				}
				else
				{
					if(precio < alcoholBarato)
					{
					alcoholBarato = precio;
					nombre = nombreAlcohol;
					cantidadUnidadesBarato = cantidadUnidades;
					fabricanteBarato = fabricantes;
					}
				contadorAlcohol++;
				acumuladorAlcohol = acumuladorAlcohol + precio;
				break;
				}
			case "barbijo":
				contadorBarbijos++;
				acumuladorBarbijos = acumuladorBarbijos + precio;
				break;
			case "jabon":
				contadorJabon++;
				acumuladorJabon = acumuladorJabon + precio;
				break;
		}
		acumuladorAlcohol = acumuladorAlcohol + precio;
		contador++;
		usuarioRespuesta = prompt("Quiere ingresar un nuevo usuario?");
	
	}
	if (contadorAlcohol > contadorBarbijos && contadorJabon)
	{
		tipoMasUnidades = contadorAlcohol;
		acumuladorFinal = acumuladorAlcohol;
	}
	else
	{
		if(contadorBarbijos > contadorJabon)
		{
			tipoMasUnidades = contadorAlcohol;
			acumuladorFinal = acumuladorAlcohol;
		}
		else
		{
			tipoMasUnidades = contadorJabon;
			acumuladorFinal = acumuladorJabon;
		}
	}
	promedio = acumuladorFinal/tipoMasUnidades;
	alert("la cantidad de unidades del mas barato es: " + cantidadUnidadesBarato);
	alert("el fabricante del mas baratoes " + fabricanteBarato);
	alert("el promedio es " + promedio);
	alert("la cantidad de jabones es " + contadorJabon);
}
