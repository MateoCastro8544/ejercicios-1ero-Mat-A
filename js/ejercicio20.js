
	// Mateo Castro
	// Dise�e un algoritmo que lea un numero de 3 cifra y determine si es o no palindromono.
	var num = new Number();
	var d1 = new Number();
	var d2 = new Number();
	var r1 = new Number();
	var d3 = new Number();
	alert("Ingrese un numero de 3 cifras: ");
	num = Number(prompt());
	d1 = (num-(num%100))/100;
	r1 = num%100;
	d2 = (r1-(r1%10))/10;
	d3 = r1%10;
	document.write(" ",'<BR/>');
	if (num==((d3*100)+(d2*10)+d1)) {
		document.write("El numero es palindromo",'<BR/>');
	} else {
		document.write("El numero NO ES palindromo",'<BR/>');
	}


