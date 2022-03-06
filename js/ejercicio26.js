
// MOSTRAR EL COSTO A PAGAR POR UNA LLAMADA TELEF�NICA, SEG�N LA ZONA DE DESTINO Y LA DURACI�N EN MINUTOS 
// CON SUS RESPECTIVAS RESTRICCIONES.
// Mateo Castro
	var tiempollamada, total;
	var clave = new Number();
	alert("Escoja la clave hacia a donde llama:"+
	"\n(1) - 0.15$ - Estados Unidos "+
	"\n(2) - 0.14$ -Canada"+
	"\n(3) - 0.25$ -Espa�a"+
	"\n(4) - 0.05$ -Colombia"+
	"\n(5) - 0.10$ -Venezuela"+
	"\n(6) - 0.11$ -Mexico"+
	"\n(7) - 0.12$ -Argentina"+
	"\n(8) - 0.08$ -Panama");
	clave = Number(prompt());
	switch (clave) {
	case 1:
		alert("�Cuantos minutos duro la llamada?",'<BR/>');
		tiempollamada = Number(prompt());
		total = 0.15*tiempollamada;
		document.write("Su total a pagar es de: ",total,"$",'<BR/>');
		break;
	case 2:
		alert("�Cuanto duro la llamada?",'<BR/>');
		tiempollamada = Number(prompt());
		total = 0.14*tiempollamada;
		document.write("Su total a pagar es de: ",total,"$",'<BR/>');
		break;
	case 3:
		alert("�Cuanto duro la llamada?",'<BR/>');
		tiempollamada = Number(prompt());
		total = 0.25*tiempollamada;
		document.write("Su total a pagar es de: ",total,"$",'<BR/>');
		break;
	case 4:
		alert("�Cuanto duro la llamada?",'<BR/>');
		tiempollamada = Number(prompt());
		total = 0.05*tiempollamada;
		document.write("Su total a pagar es de: ",total,"$",'<BR/>');
		break;
	case 5:
		alert("�Cuanto duro la llamada?",'<BR/>');
		tiempollamada = Number(prompt());
		total = 0.10*tiempollamada;
		document.write("Su total a pagar es de: ",total,"$",'<BR/>');
		break;
	case 6:
		alert("�Cuanto duro la llamada?",'<BR/>');
		tiempollamada = Number(prompt());
		total = 0.11*tiempollamada;
		document.write("Su total a pagar es de: ",total,"$",'<BR/>');
		break;
	case 7:
		alert("�Cuanto duro la llamada?",'<BR/>');
		tiempollamada = Number(prompt());
		total = 0.12*tiempollamada;
		document.write("Su total a pagar es de: ",total,"$",'<BR/>');
		break;
	case 8:
		alert("�Cuanto duro la llamada?",'<BR/>');
		tiempollamada = Number(prompt());
		total = 0.08*tiempollamada;
		document.write("Su total a pagar es de: ",total,"$",'<BR/>');
		break;
	default:
		alert("Ingreso la clave incorrecta por favor repetir.",'<BR/>');
	}


