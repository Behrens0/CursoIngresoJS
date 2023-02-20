function mostrar()
{
  var cantidadBolsas;
  var respuesta = "si";
  var usuarioRespuesta = prompt("quiere ingresar datos?");
  var promedioPrecioArena;
  var promedioPrecioCal;
  var promedioPrecioCemento;
  var tipoMasCaro;
  var tipoMasUnidades;
  var acumuladorBolsas = 0;
  var acumuladorBolsasArena = 0;
  var acumuladorBolsasCal = 0;
  var acumuladorBolsasCemento = 0;
  var acumuladorPrecioArena = 0;
  var acumuladorPrecio = 0;
  var acumuladorPrecioCemento = 0;
  var acumuladorPrecioCal = 0;
  var descuento = 0;
  var tipoConstruccion;
  var contadorArena = 0;
  var contadorCal = 0;
  var contadorCemento = 0;
  
  
  while(respuesta == usuarioRespuesta)
  {
    tipoConstruccion = prompt("ingrese arena, cal o cemento");
		while(tipoConstruccion != "arena" && tipoConstruccion != "cemento" && tipoConstruccion != "cal")
		{
			tipoConstruccion = prompt("ingrese arena,cal o cemento");
		}
		cantidadBolsas = prompt("ingrese cantidad de bolsas");
    cantidadBolsas =  parseInt(cantidadBolsas);
    precio = prompt("ingrese un precio mayor a CERO");
		precio = parseInt(precio);
		while(precio < 1)
		{
			precio = prompt("ingrese su precio");
			precio = parseInt(precio);
		}
    switch(tipoConstruccion)
    {
      case "arena":
        acumuladorBolsasArena = acumuladorBolsasArena + cantidadBolsas;
        acumuladorPrecioArena = acumuladorPrecioArena + precio;
        contadorArena++;
        break;
      case "cemento":
        acumuladorBolsasCemento = acumuladorBolsasCemento + cantidadBolsas;
        acumuladorPrecioCemento = acumuladorPrecioCemento + precio;
        contadorCemento++;
        break;
      case "cal":
        acumuladorBolsasCal = acumuladorBolsasCal + cantidadBolsas;
        acumuladorPrecioCal = acumuladorPrecioCal + precio;
        contadorCal++;
        break;
    }
    acumuladorBolsas = acumuladorBolsas + cantidadBolsas;
    acumuladorPrecio = acumuladorPrecio + precio;
    usuarioRespuesta = prompt("quiere ingresar mas datos?");
  }


  acumuladorBolsasArena =  parseInt(acumuladorBolsasArena);
  acumuladorBolsasCal =  parseInt(acumuladorBolsasCal);
  acumuladorBolsasCemento =  parseInt(acumuladorBolsasCemento);
  if (acumuladorBolsas > 30)
  {
    descuento = 25;
  }
  else
  {
    if(acumuladorBolsas > 10)
    {
      descuento = 15;
    }
    else
    {
      descuento = 0
    }
  }
  precioFinal = acumuladorPrecio - (acumuladorPrecio / 100)* descuento;
  alert("el precio sin descuento es" + acumuladorPrecio);
  if(descuento > 0)
  {
    alert("el precio con descuento es" + precioFinal);
  }
  if (acumuladorBolsasArena > acumuladorBolsasCal && acumuladorBolsasArena > acumuladorBolsasCemento)
    {
      tipoMasUnidades = "arena";
    }
    else
    {
      if(acumuladorBolsasCal > acumuladorBolsasCemento)
      {
        tipoMasUnidades = "cal";
      }
      else
      {
        tipoMasUnidades = "cemento";
      }
    }
    alert("el tipo con mas bolsas es" + tipoMasUnidades);

  promedioPrecioArena = acumuladorPrecioArena /contadorArena;
  promedioPrecioCal = acumuladorPrecioCal /contadorCal;
  promedioPrecioCemento = acumuladorPrecioCemento /contadorCemento;
  if (promedioPrecioArena > promedioPrecioCal && promedioPrecioArena > promedioPrecioCemento)
    {
      tipoMasCaro = "arena";
    }
    else
    {
      if(promedioPrecioCal > promedioPrecioCemento)
      {
        tipoMasCaro = "cal";
      }
      else
      {
        tipoMasCaro = "cemento";
      }
    }
  alert("tipo mas caro es" + tipoMasCaro);

   
}
