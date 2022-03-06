
	// Mateo Castro
	// Se pide ingresar el sueldo de un trabajador y su categor�a, dependiendo de la
	// categor�a se le dar� una bonificaci�n en el neto a pagar.
	var bonificacion, subtotala, subtotalb, subtotalc, subtotald, totala, totalb, totalc, totald;
	var sueldo = new Number();
	var categoria = new String();
	var nombre = new String();
	alert("Ingrese el nombre del trabajador",'<BR/>');
	nombre = prompt();
	alert("Ingrese el sueldo",'<BR/>');
	sueldo = Number(prompt());
	alert("Ingrese la categoria (A,B,C,D)",'<BR/>');
	categoria = prompt();
	subtotala = sueldo;
	bonificacion = sueldo*0.10;
	totala = sueldo+bonificacion;
	subtotalb = sueldo;
	bonificacion = sueldo*0.20;
	totalb = sueldo+bonificacion;
	subtotalc = sueldo;
	bonificacion = sueldo*0.30;
	totalc = sueldo+bonificacion;
	subtotald = sueldo;
	bonificacion = sueldo*0.50;
	totald = sueldo+bonificacion;
	switch (categoria) {
	case "A":
		document.write(" Se debe pagar a ",nombre," un valor neto de: ",totala," $",'<BR/>');
		break;
	case "B":
		document.write(" Se debe pagar a ",nombre," un valor neto de: ",totalb," $",'<BR/>');
		break;
	case "C":
		document.write(" Se debe pagar a ",nombre," un valor neto de: ",totalc," $",'<BR/>');
		break;
	case "D":
		document.write(" Se debe pagar a ",nombre," un valor neto de: ",totald," $",'<BR/>');
		break;
	default:
		document.write("Categoria erronea, vuelva a ingresar",'<BR/>');
	}


