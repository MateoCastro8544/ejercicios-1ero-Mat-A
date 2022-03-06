
	// Mateo Castro
	// REALIZAR UN PROGRAMA QUE MUESTRE LA SIGUIENTE SERIE
	// NUMERICA GRAFICA:
	var num = new Number();
	var i = new Number();
	var j = new Number();
	alert("Ingrese un numero",'<BR/>');
	num = Number(prompt());
	for (i=num;i>=1;i--) {
		for (j=1;j<=i;j++) {
			document.write(j);
		}
		document.write("",'<BR/>');
	}


