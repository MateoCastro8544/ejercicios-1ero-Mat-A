

	// MATEO CASTRO
	// Realizar un programa que clasifiqu� a partir de la nota si un estudiante est� en alguno de estos criterios: De 0-2 : Necesita Reforzamiento; 3-4: Desaprobado; 5-7: Aprobado; 8-9: Excelente y 10: BECADO
	var nombre = new String();
	var nota = new Number();
	alert("Ingrese el nombre del estudiante",'<BR/>');
	nombre = prompt();
	alert("Ingrese nota del estudiante",'<BR/>');
	nota = Number(prompt());
	if (nota>=0 && nota<=2) {
		document.write("El estudiante ",nombre," Necesita Reforzamiento",'<BR/>');
	} else {
		if (nota>=3 && nota<=4) {
			document.write("El estudiante ",nombre," Esta Desaprobado",'<BR/>');
		} else {
			if (nota>=5 && nota<=7) {
				document.write("El estudiante ",nombre," Esta Aprobado",'<BR/>');
			} else {
				if (nota>=8 && nota<=9) {
					document.write("El estudiante ",nombre," Tiene un promedio EXCELENTE",'<BR/>');
				} else {
					if (nota==10) {
						document.write("El estudiante ",nombre," Esta BECADO",'<BR/>');
					} else {
						alert("Nota no valida, volver a ingresar",'<BR/>');
					}
				}
			}
		}
	}


