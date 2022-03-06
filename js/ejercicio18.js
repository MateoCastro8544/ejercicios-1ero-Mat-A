
	// Mateo Castro
	// Hacer un programa que muestre el mayor de 10 n�meros ingresados
	var n = new Number();
	var may = new Number();
	var cont = new Number();
	var num = new Number();
	cont = 0;
	do {
		alert5("ingrese el numero",'<BR/>');
		cont = cont+1;
		n = Number(prompt());
		if (cont==1) {
			may = n;
		} else {
			if (n>may) {
				may = n;
			}
		}
	} while (cont!=10);
	document.write("El numero mayor es ",may,'<BR/>');


