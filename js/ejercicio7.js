
	// MATEO CASTRO
	// Mostrar el costo a pagar por una llamada telef�nica, seg�n la zona y la duraci�n en minutos
	var total;
	var clave = new Number();
	var minutos = new Number();
	alert("Escoja la clave hacia donde llama"+ 
		"\n(1)-0.15$-Estados Unidos"+
		"\n(2)-0.14$-Canada"+
		"\n(3)-0.25$-Espa�a"+
		"\n(4)-0.05$-Colombia"+
		"\n(5)-0.10$-Venezuela"+
		"\n(6)-0.11$-Mexico"+
		"\n(7)-0.12$-Argentina"+ 
		"\n(8)-0.08$-Panama")
	
	clave = Number(prompt());
	switch (clave) {
	case 1:
		alert("�Cuantos minutos duro la llamada?",'<BR/>');
		minutos = Number(prompt());
		total = 0.15*minutos;
		document.write("Su total a pagar es de: ",total," $",'<BR/>');
		break;
	case 2:
		alert("�Cuantos minutos duro la llamada?",'<BR/>');
		minutos = Number(prompt());
		total = 0.14*minutos;
		document.write("Su total a pagar es de: ",total," $",'<BR/>');
		break;
	case 3:
		alert("�Cuantos minutos duro la llamada?",'<BR/>');
		minutos = Number(prompt());
		total = 0.25*minutos;
		document.write("Su total a pagar es de: ",total," $",'<BR/>');
		break;
	case 4:
		alert("�Cuantos minutos duro la llamada?",'<BR/>');
		minutos = Number(prompt());
		total = 0.05*minutos;
		document.write("Su total a pagar es de: ",total," $",'<BR/>');
		break;
	case 5:
		alert("�Cuantos minutos duro la llamada?",'<BR/>');
		minutos = Number(prompt());
		total = 0.10*minutos;
		document.write("Su total a pagar es de: ",total," $",'<BR/>');
		break;
	case 6:
		alert("�Cuantos minutos duro la llamada?",'<BR/>');
		minutos = Number(prompt());
		total = 0.11*minutos;
		document.write("Su total a pagar es de: ",total," $",'<BR/>');
		break;
	case 7:
		alert("�Cuantos minutos duro la llamada?",'<BR/>');
		minutos = Number(prompt());
		total = 0.12*minutos;
		document.write("Su total a pagar es de: ",total," $",'<BR/>');
		break;
	case 8:
		alert("�Cuantos minutos duro la llamada?",'<BR/>');
		minutos = Number(prompt());
		total = 0.08*minutos;
		document.write("Su total a pagar es de: ",total," $",'<BR/>');
		break;
	default:
		alert("Ingreso la clave incorrecta, por favor repetir.",'<BR/>');
	}


