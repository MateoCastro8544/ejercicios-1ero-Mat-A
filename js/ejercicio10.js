
	// Mateo Castro
	// dentificar mediante un programa si es a�o bisiesto y si la fecha es
	// correcta.
	var fecha = new String();
	var d = new Number();
	var m = new Number();
	var a = new Number();
	var b = new Number();
	alert("Ingrese fecha con el formato DD//MM/AAAA");
	fecha = prompt();
	d = Number(String.substring(fecha,-1,2));
	m = Number(String.substring(fecha,3,5));
	a = Number(String.substring(fecha,6,10));
	document.write("Dia ",d,'<BR/>');
	document.write("Mes ",m,'<BR/>');
	document.write("A�o ",a,'<BR/>');
	document.write("",'<BR/>');
	if ((a>=1582 && a<=3000) && (m>=1 && m<=12) && (d>=1 && d<=31)) {
		if (((a%4)==0 && (a%100)!=0 || (a%400)==0)) {
			document.write("A�o bisiesto",'<BR/>');
			b = 0;
		} else {
			document.write("A�o NO bisiesto",'<BR/>');
			b = 1;
		}
		if (b==0) {
			switch (m) {
			case 1: case 3: case 5: case 7: case 8: case 10: case 12:
				if ((d>=1 && d<-31)) {
					document.write("FECHA CORRECTA",'<BR/>');
				} else {
					document.write("FECHA INCORRECTA",'<BR/>');
				}
				if ((d>=1 && d<=29)) {
					document.write(" FECHA CORRECTA",'<BR/>');
				} else {
					document.write(" FECHA INCORRECTA",'<BR/>');
				}
				break;
			case 4: case 6: case 9: case 11:
				if ((d>=1 && d<=30)) {
					document.write("FECHA CORRECTA",'<BR/>');
				} else {
					document.write("FECHA INCORRECTA",'<BR/>');
				}
				break;
			}
		} else {
			switch (m) {
			case 1: case 3: case 5: case 7: case 8: case 10: case 12:
				if ((d>=1 && d<=31)) {
					document.write("FECHA CORRECTA",'<BR/>');
				} else {
					document.write("FECHA INCORRECTA",'<BR/>');
				}
				if ((d>=1 && d<=28)) {
					document.write("FECHA CORRECTA",'<BR/>');
				} else {
					document.write("FECHA INCORRECTA",'<BR/>');
				}
				break;
			case 4: case 6: case 9: case 11:
				if ((d>=1 && d<=30)) {
					document.write("FECHA CORRECTA",'<BR/>');
				} else {
					document.write("FECHA INCORRECTA",'<BR/>');
				}
				break;
			}
		}
	} else {
		alert(" ERROR EN LA FECHA",'<BR/>');
	}

]

