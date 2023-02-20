function mostrar()
{

    var acumuladorHabitantes = 0;
    var cantidadHabitantes;
    var temperaturaMinima;
    var contadorPaisesCuarenta = 0;
    var contadorPares = 0;
    var contador = 0;
    var menorCantidadHabitantes;
    var temperaturaAnteriorMinima;
    var usuarioRespuesta = prompt("quiere ingresar datos?");
    var respuesta = "si";

    while(respuesta == usuarioRespuesta)
    {
        paisNombre = prompt("ingrese el pais")
        cantidadHabitantes = prompt("ingrese habitantes en millones entre 1 y 7000");
		cantidadHabitantes = parseInt(cantidadHabitantes);
		while(cantidadHabitantes < 1 || cantidadHabitantes > 7000)
		{
			cantidadHabitantes = prompt("ingrese su cantidadHabitantes");
			cantidadHabitantes = parseInt(cantidadHabitantes);
		}
        temperaturaMinima = prompt("ingrese entre -50 y 50");
		temperaturaMinima = parseInt(temperaturaMinima);
		while(temperaturaMinima < -50 || temperaturaMinima > 50)
		{
			temperaturaMinima = prompt("ingrese su temperaturaMinima");
			temperaturaMinima = parseInt(temperaturaMinima);
		}
        if (temperaturaMinima % 2 == 0)
        {
            contadorPares++;
        }
        if (contador == 0)
				{
					paisMenosHabitantes = paisNombre;
					menorCantidadHabitantes = cantidadHabitantes;
                    temperaturaMinimaIngresada = paisNombre;
                    temperaturaAnteriorMinima = temperaturaMinima;
				}
				else
				{
					if(cantidadHabitantes < menorCantidadHabitantes)
					{
                        paisMenosHabitantes = paisNombre;
					    menorCantidadHabitantes = cantidadHabitantes;
					}
                    if(temperaturaAnteriorMinima > temperaturaMinima)
                    {
                        temperaturaMinimaIngresada = paisNombre;
                        temperaturaAnteriorMinima = temperaturaMinima;
                    }
                } 
        if (temperaturaMinima > 40)
        {
            contadorPaisesCuarenta++;
        }
        contador++;
        acumuladorHabitantes = acumuladorHabitantes + cantidadHabitantes;
        usuarioRespuesta = prompt("quiere ingresar mas datos?");
    }
    promedio = acumuladorHabitantes / contador;
    alert("las temperaturas pares son " + contadorPares);
    alert("el pais con menos habitantes es" + paisMenosHabitantes);
    alert("la cantidad de paises q superan los 40 grados es " + contadorPaisesCuarenta);
    alert("el promedio de habitantes es " + promedio);
    alert("la temperatura minima ingresada es " + temperaturaAnteriorMinima);
    alert("y es el pais " + temperaturaMinimaIngresada);

    



}
