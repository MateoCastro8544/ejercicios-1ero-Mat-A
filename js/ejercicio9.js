
	// MATEO CASTRO
	// La suma de n n�meros naturales, donde n es el numero limite que ingresa el usuario.
	var cont, suma;
	var n = new Number();
	alert("Ingrese un numero",'<BR/>');
	n = Number(prompt());
	cont = 0;
	suma = 0;
	while (cont<n) {
		cont = cont+1;
		suma = suma+cont;
	}
	document.write("La suma es: ",suma,'<BR/>');


