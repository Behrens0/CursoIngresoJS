function mostrar()
{
    var nombreAnimal;
    var temperaturaHabitat;
    var contadorPares = 0;
    var contador = 0;
    var animalPesado;
    var respuesta = "si";
    var usuarioRespuesta = prompt("ingresa datos?");
    var pesoMaximoBajoCero;
    var pesoAnimal;
    var contadorPares;
    var maximoPeso;
    var acumuladorPeso = 0;
    var animalPesadoBajoCero;
    var contadorBajoCero = 0;
    var promedio;
    var temperaturaPesado;
    var pesoMinimoBajoCero;



    while(respuesta == usuarioRespuesta)
    {
        nombreAnimal = prompt("ingrese el nombre del animal del zoologico");
        pesoAnimal = prompt("ingrese entre 2 y 1000");
		pesoAnimal = parseInt(pesoAnimal);
		while(pesoAnimal < 1 || pesoAnimal > 1000)
		{
			pesoAnimal = prompt("ingrese su pesoAnimal");
			pesoAnimal = parseInt(pesoAnimal);
		}
        temperaturaHabitat = prompt("ingrese entre -30 y 30");
		temperaturaHabitat = parseInt(temperaturaHabitat);
		while(temperaturaHabitat < -30 || temperaturaHabitat > 30)
		{
			temperaturaHabitat = prompt("ingrese su temperaturaHabitat");
			temperaturaHabitat = parseInt(temperaturaHabitat);
		}
        if (temperaturaHabitat % 2 == 0)
        {
            contadorPares++;
        }
        
        
        if (contador == 0)
		{
			animalPesado = nombreAnimal;
            temperaturaPesado = temperaturaHabitat;
            maximoPeso = pesoAnimal;
		}
		else
		{
			if(pesoAnimal > maximoPeso)
			{
                maximoPeso = pesoAnimal;
                temperaturaPesado = temperaturaHabitat;
                animalPesado = nombreAnimal;
            }
        }

        if (temperaturaHabitat < 0)
        {
            contadorBajoCero++;
            
            if(contador == 0)
            {
                pesoMaximoBajoCero = pesoAnimal;
                animalPesadoBajoCero = nombreAnimal;
                pesoMinimoBajoCero = pesoAnimal;
            }
            else
            {
                if(pesoAnimal > pesoMaximoBajoCero)
                {
                    pesoMaximoBajoCero = pesoAnimal;
                    animalPesadoBajoCero = nombreAnimal;
                }
                if(pesoAnimal < pesoMinimoBajoCero)
                {
                    pesoMinimoBajoCero = pesoAnimal;
                }
            }
        }
        acumuladorPeso = acumuladorPeso + pesoAnimal;
        contador++;
        usuarioRespuesta = prompt("ingresa mas datos?");
    }
    promedio = acumuladorPeso / contador;
    alert("las temperaturas pares son " + contadorPares);
    alert("el nombre del animal mas pesado es " + animalPesado + "y la temperatura es " + temperaturaPesado);
    alert("la cantidad de animales que viven a menos de 0 grados es " + contadorBajoCero);
    alert("el promedio de peso es " + promedio);
    alert("el peso maximo de los bajo cero es  " + pesoMaximoBajoCero + "y el minimo es " + pesoMinimoBajoCero);

}
