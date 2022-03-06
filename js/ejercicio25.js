
	// Mateo Castro
	// ELABORAR UN PROGRAMA QUE INGRESE 3 N�MEROS Y MUESTRE EL N�MERO INTERMEDIO.
	var num1 = new Number();
	var num2 = new Number();
	var num3 = new Number();
	alert("Ingrese el primer numero",'<BR/>');
	num1 = Number(prompt());
	alert("ingrese el segundo numero",'<BR/>');
	num2 = Number(prompt());
	alert("ingrese el tercer numero",'<BR/>');
	num3 = Number(prompt());
	if (num1>num2 && num1<num3 || num1>num3 && num1<num2) {
		document.write(" el numero intermedio es ",num1,'<BR/>');
	} else {
		if (num2<num1 && num2>num3 || num2>num1 && num2<num3) {
			document.write("el numero intermedio es ",num2,'<BR/>');
		} else {
			if (num3>num2 && num3<num1 || num3<num2 && num3>num1) {
				document.write(" el numero intermedio es ",num3,'<BR/>');
			} else {
				document.write("los numero ingresados son iguales ",'<BR/>');
			}
		}
	}

