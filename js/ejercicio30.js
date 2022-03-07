
	// David Castro,Stiven Lara,David Quiroga
	// EJERCIO 9:REALIZAR UN PROGRAMA QUE MUESTRE LA SIGUIENTE SERIE GRAFICA:
	var cont, i, j, k, m;
	var num = new Number();
	var acumulador = new String();
	alert("Ingrese un Numero",'<BR/>');
	num = Number(prompt());
	if (num<3) {
		alert("No se puede ejecutar con numeros menores a 3 vuelva a ingresar otro numero",'<BR/>');
	} 
	else {
		cont = num;
		acumulador = "";
		for (i=1;i<=3;i++) {
			acumulador = " ";
			for (j=1;j<=cont;j++) {
				acumulador = acumulador+"*";
			}
			cont = cont-1;
			document.write(acumulador,'<BR/>');
		}
		cont = cont+1;
		for (k=1;k<=2;k++) {
			acumulador = " ";
			cont = cont+1;
			for (m=1;m<=cont;m++) {
				acumulador = acumulador+"*";
			}
			document.write(acumulador,'<BR/>');
		}
	}


