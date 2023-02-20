function mostrar()
{
    var letraMaximo;
    var letra;
    var numeroMinimo;
    var numeroMaximo;
    var numeroIngresado;
    var acumuladorPositivos = 0;
    var acumuladorNegativos = 0;
    var contadorCeros = 0;
    var letraMinimo;
    var contadorPares = 0;    
    var contadorImpares = 0;
    var usuarioRespuesta = prompt("quiere ingresar datos?");
    var respuesta = "si";
    var promedio;
    var contador = 0;
    var contadorPositivos = 0;

    while (respuesta == usuarioRespuesta)
    {
        letra = prompt("ingrese una letra");
        numeroIngresado = prompt("ingrese entre -100 y 100");
		numeroIngresado = parseInt(numeroIngresado);
		while(numeroIngresado < -100 || numeroIngresado > 100)
		{
			numeroIngresado = prompt("ingrese su numeroIngresado");
			numeroIngresado = parseInt(numeroIngresado);
		}
        if(numeroIngresado % 2 == 0)
        {
            contadorPares++;
        }
        else
        {
            contadorImpares++;
        }
        if (numeroIngresado == 0)
        {
            contadorCeros++;
        }
        else
        {
            if(numeroIngresado > 0)
            {
                acumuladorPositivos = acumuladorPositivos + numeroIngresado;
                contadorPositivos++;
            }
            else
            {
                acumuladorNegativos = acumuladorNegativos + numeroIngresado;
            }
        }
        if (contador == 0)
		{
			numeroMaximo = numeroIngresado;
            numeroMinimo = numeroIngresado;
            letraMinimo = letra;
            letraMaximo = letra;

		}
		else
		{
			if(numeroIngresado > numeroMaximo)
			{
                numeroMaximo = numeroIngresado;
                letraMaximo = letra;
            }
            if(numeroIngresado < numeroMinimo)
            {
                numeroMinimo = numeroIngresado;
                letraMinimo = letra;
            }
        }
        contador++;
        usuarioRespuesta = prompt("quiere ingresar mas datos?");
    
    }
    promedio = acumuladorPositivos / contadorPositivos;
    if (isNaN(promedio))
    {
        promedio = 0;
    }
    alert("Los numeros pares son " + contadorPares);
    alert("los numeros impares son " + contadorImpares);
    alert("la cantidad de ceros es " + contadorCeros);   
    alert("el promedio es " + promedio);
    alert("la suma de los negativos es " + acumuladorNegativos);
    alert("el numero del maximo es " + numeroMaximo + " y la letra es" + letraMaximo);
    alert("EL NUMERO DEL MINIMO ES " + numeroMinimo + " y la letra es " + letraMinimo);
}
