
	// Mateo Castro 
	// HACER UN ALGORITMO QUE NOS CALCULE LA SUMA DE LOS N PRIMEROS N�MEROS PARES SIGUIENTES AL N�MERO. ES DECIR; SI INSERTAMOS UN 5, NOS HAGA LA SUMA DE 6+8+10+12+14.
	var num = new Number();
	var suma = new Number();
	var cont = new Number();
	cont = 1;
	alert(" ingrese un numero",'<BR/>');
	num = Number(prompt());
	for (cont=num+1;cont<=num*3;cont++) {
		if (cont%2==0) {
			suma = suma+cont;
		}
	}
	document.write(" la suma de los ",num," numeros pares que vienen despues de ",num," es ",suma,'<BR/>');


