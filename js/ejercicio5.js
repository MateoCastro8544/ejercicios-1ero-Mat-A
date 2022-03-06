
	// Mateo Castro
	// Hacer un programa para calcular el promedio de 3 notas, si el promedio es menor a 6.95 se lo considera REPROBADO caso contrario Aprobado.
	var promedio;
	var nombre = new String();
	var nota1 = new Number();
	var nota2 = new Number();
	var nota3 = new Number();
	alert("Ingrese nombre del estudiante",'<BR/>');
	nombre = prompt();
	alert("Ingrese la nota 1",'<BR/>');
	nota1 = Number(prompt());
	alert("Ingrese la nota 2",'<BR/>');
	nota2 = Number(prompt());
	alert("Ingrese la nota 3",'<BR/>');
	nota3 = Number(prompt());
	promedio = (nota1+nota2+nota3)/3;
	if (promedio<6.95) {
		document.write("Su promedio es: ",promedio,'<BR/>');
		document.write("El estudiante ",nombre," REPROBO",'<BR/>');
	} else {
		document.write("Su promedio es: ",promedio,'<BR/>');
		document.write("El estudiante ",nombre," APROBO",'<BR/>');
	}


