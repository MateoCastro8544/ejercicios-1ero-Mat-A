
	// Mateo Castro
	// Ingresar un n�mero y mostrar la suma de todos los pares e impares desde 0 hasta el n�mero ingresado
	var inicio = new Number();
	var final = new Number();
	var sumapares = new Number();
	var sumaimpares = new Number();
	sumapares = 0;
	sumaimpares = 0;
	alert("Ingrese el inicio del numero",'<BR/>');
	inicio = Number(prompt());
	alert("Ingresar el numero final",'<BR/>');
	final = Number(prompt());
	while (inicio<=final) {
		if (inicio%2==0) {
			sumapares = sumapares+inicio;
		} else {
			sumaimpares = sumaimpares+inicio;
		}
		inicio = inicio+1;
	}
	document.write("la suma de los pares: ",sumapares,'<BR/>');
	document.write("La suma de los impares: ",sumaimpares,'<BR/>');

