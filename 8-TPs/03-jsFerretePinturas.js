/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let conversionCelsius;
    let temperaturaFarenheit;
    temperaturaFarenheit =document.getElementById("txtIdTemperatura").value;
    temperaturaFarenheit = parseFloat(temperaturaFarenheit);
    conversionCelsius = temperaturaFarenheit - 32;
    conversionCelsius = conversionCelsius * 5/9;
    alert(temperaturaFarenheit+" son "+conversionCelsius);
    
    
    //(32°F − 32) × 5/9 = 0°C

}

function CentigradosFahrenheit () 
{
	//(2°C × 9/5) + 32 = 35.6°F
    let temperaturaCelsius;
    let conversionFarenheit;
    temperaturaCelsius = document.getElementById("txtIdTemperatura").value;
    temperaturaCelsius = parseFloat(temperaturaCelsius);
    conversionFarenheit = temperaturaCelsius * 9/5 + 32;
    alert(temperaturaCelsius+" son "+conversionFarenheit);




}
