
	// Mateo Castro
	// Ingresar tres n�meros enteros y mostrar el mayor de ellos
	var numero1, numero2, numero3;
	var n = new Number();
	alert("Ingrese tres numeros enteros",'<BR/>');
	alert("numero1",'<BR/>');
	numero1 = prompt();
	alert("numero2",'<BR/>');
	numero2 = prompt();
	alert("numero3",'<BR/>');
	numero3 = prompt();
	if (numero1>numero2 && numero1>numero3) {
		document.write("El numero mayor es: ",numero1,'<BR/>');
	} else {
		if (numero2>numero1 && numero2>numero3) {
			document.write("El numero mayor es: ",numero2,'<BR/>');
		} else {
			if (numero3>numero2 && numero3>numero1) {
				document.write("El numero mayor es: ",numero3,'<BR/>');
			}
		}
	}


