
	// Mateo Castro Miguel Bola�os  Steven Lara  David Quiroga
	// HACER UN ALGORITMO QUE MUESTRE EL PROMEDIO DE VARIAS NOTAS O DE N NOTAS INGRESADAS, SE DEBE DEFINIR EL VALOR DE N PARA CONOCER LA CANTIDAD DE NOTAS A INGRESAR.
	var acum, i, n, nota, prom;
	alert("ingrese el numero de notas",'<BR/>');
	n = Number(prompt());
	acum = 0;
	for (i=1;i<=n;i++) {
		alert("Ingrese la nota:",i,":",'<BR/>');
		nota = Number(prompt());
		acum = acum+nota;
	}
	prom = acum/n;
	document.write("El promedio es: ",prom,'<BR/>');


