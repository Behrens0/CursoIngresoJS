/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let ancho;
    let largo;
    let alambre;
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    alambre = 2 * largo + 2 * ancho;
    alambre = alambre * 3;
    alert("La cantidad de alambre a utilizar es: " +alambre);

}
function Circulo () 
{
	let radio;
    let alambreGeneral;
    let alambreUtilizado;
    let pi = 3.14;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);
    alambreGeneral = 2 * pi *radio;
    alambreUtilizado = alambreGeneral * 3;
    alert("La cantidad de alambre a utilizar es: "+alambreUtilizado);
    
}
function Materiales () 
{
	let cemento;
    let cal;
    let ancho;
    let largo;
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    cemento = largo * ancho * 2;
    cemento = parseInt(cemento);
    cal = largo * ancho * 3;
    cal = parseInt(cal);
    alert("La cantidad de bolsas de cemento a utilizar serán "+cemento+ " y de cal se utilizarán "+cal);
    
    


}