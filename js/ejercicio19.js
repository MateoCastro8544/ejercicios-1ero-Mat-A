
	// Mateo Castro
	// Hacer un programa que ordene los n�meros ingresados de mayor a menor y de menor a mayor.
	var num1 = new Number();
	var num2 = new Number();
	var num3 = new Number();
	var num4 = new Number();
	var nummay = new Number();
	var nummen = new Number();
	var i = new Number();
	alert("Ingrese dato numero uno",'<BR/>');
	num1 = Number(prompt());
	alert("Ingrese dato numero dos",'<BR/>');
	num2 = Number(prompt());
	alert("Ingrese dato numero tres",'<BR/>');
	num3 = Number(prompt());
	if (num1==num2 && num2==num3) {
		document.write("No existe orden Ascendente",'<BR/>');
	} else {
		if (num1<num2 && num1<num3) {
			if (num2<num3) {
				document.write("la orden ascendente es: ",num1,",",num2,",",num3,'<BR/>');
			} else {
				document.write("la orden descendente es: ",num1,",",num3,",",num2,'<BR/>');
			}
		} else {
			if (num2<num1 && num2<num3) {
				if (num1<num3) {
					document.write("la orden ascendente es: ",num2,",",num1,",",num3,'<BR/>');
				} else {
					document.write("la orden ascendente es: ",num2,",",num3,",",num1,'<BR/>');
				}
			} else {
				if (num3<num1 && num3<num2) {
					if (num1<num2) {
						document.write("la orden ascendente es: ",num3,",",num1,",",num2,'<BR/>');
					} else {
						document.write("la orden ascendente es: ",num3,",",num2,",",num1,'<BR/>');
					}
				}
			}
		}
	}
	if (num1==num2 && num2==num3) {
		document.write("################################",'<BR/>');
		document.write("No existe orden Descendente",'<BR/>');
		document.write("################################",'<BR/>');
	} else {
		if (num1>num2 && num1>num3) {
			if (num2>num3) {
				document.write("la orden ascendente es: ",num1,",",num2,",",num3,'<BR/>');
			} else {
				document.write("la orden ascendente es: ",num1,",",num3,",",num2,'<BR/>');
			}
		} else {
			if (num2>num1 && num2>num3) {
				if (num1>num3) {
					document.write("la orden ascendente es: ",num2,",",num1,",",num3,'<BR/>');
				} else {
					document.write("la orden ascendente es: ",num2,",",num3,",",num1,'<BR/>');
				}
			} else {
				if (num3>num1 && num3>num2) {
					if (num1>num2) {
						document.write("la orden descendente es: ",num3,",",num1,",",num2,'<BR/>');
					} else {
						document.write("la orden descendente es: ",num3,",",num2,",",num1,'<BR/>');
					}
				}
			}
		}
	}


