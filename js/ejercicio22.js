
// REALIZAR UN PROGRAMA QUE MUESTRE LA SERIE DE FIBONACCI CON N�MEROS MENORES AL X200 ES DECIR X<200
// David Castro
	var nanterior, nnormal;
	var op = new Number();
	var n = new Number();
	var nfibonacci = new Number();
	alert("Ingrese un numero menor a 200",'<BR/>');
	n = Number(prompt());
	nfibonacci = 0;
	nnormal = 0;
	nanterior = 1;
	if (n<200) {
		while (nfibonacci<=n) {
			document.write("             ",nfibonacci,'<BR/>');
			nfibonacci = nnormal+nanterior;
			nanterior = nnormal;
			nnormal = nfibonacci;
		}
	} else {
		document.write("numero limite sobrepasado, vuelva a ingresar",'<BR/>');
	}


