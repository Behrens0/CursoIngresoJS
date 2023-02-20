function mostrar()
{
	
	var nombre;
	var edad;
	var sexo;
	var respuesta;
	var temperaturaMaxima;
	var acumulador;
	var contadorHombresSolteros = 0;
	var contadorMayoresTemperaturaAlta = 0;
	var promedio;
	var contadorViudosMayores = 0;
	var nombreTemperatura;
	var contadorHombresViudosSolteros;
	var contador = 0;
	acumulador = 0;
	respuesta = "si"
	usuarioRespuesta = prompt("Quiere ingresar sus datos?")
	
	while(respuesta == usuarioRespuesta)
	{
		nombre = prompt("ingrese su nombre");
		edad = prompt("ingrese su edad");
		edad = parseInt(edad);
		while(edad < 0 || edad > 100)
		{
			edad = prompt("ingrese su edad");
			edad = parseInt(edad);
		}
		
		temperaturaCorporal = prompt("ingrese su temperaturaCorporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);
		while(temperaturaCorporal < 35 || temperaturaCorporal > 45)
		{
			temperaturaCorporal = prompt("ingrese su temperaturaCorporal");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		}

		sexo = prompt("ingrese su sexo");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("ingrese su sexo");
		}

		estadoCivil = prompt("ingrese su estadoCivil");
		estadoCivil = parseInt(estadoCivil);
		while(estadoCivil != "casado" && estadoCivil && "soltero" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("ingrese su estadoCivil");
		}
		
		if (contador == 0)
			{
				temperaturaMaxima = temperaturaCorporal;
				nombreTemperatura = nombre;
			}
			else
			{
				if(temperaturaMaxima < temperaturaCorporal)
				{
				temperaturaMaxima = temperaturaCorporal;
				nombreTemperatura = nombre;
				}
			}
		
		
		if(sexo == "m")
		{
			switch(estadoCivil)
			{
				case "soltero":
					contadorHombresSolteros++;
					acumulador = acumulador + edad;;
				case "viudo":
					contadorHombresViudosSolteros++;
					break;
			}
		}
		
		if (edad > 17 && estadoCivil == "viudo")
		{
			contadorViudosMayores++;
		}

		if(edad > 60 && temperaturaCorporal > 38)
		{
			contadorMayoresTemperaturaAlta++;
		}

		contador++;
		usuarioRespuesta = prompt("Quiere ingresar un nuevo usuario?");
	}

	promedio = acumulador/contadorHombresSolteros;
	alert(nombreTemperatura)
	alert("la temperatura maxima es" + temperaturaMaxima);
	alert("la cantidad de mayores viudos es" + contadorViudos);
	alert("la cantidad de hombres soltero es" + contadorHombresSolteros);
	alert("la cantidad de hombres viudos es" + contadorHombresViudos);
	alert("La cantidad de mayores con la temperatura en mas de 38 es" + contadorMayoresTemperaturaAlta);
	alert(promedio);
	
}
