// Mateo Castro
// Calcular el �rea de un rect�ngulo, en un programa.
	var area, perimetro;
	var b = new Number();
	var a = new Number();
	alert("Ingrese la base del rectangulo",'<BR/>');
	b = Number(prompt());
	alert("Ingrese la altura del rectangulo",'<BR/>');
	a = Number(prompt());
	area = (b*a);
	perimetro = (b*2)+(a*2);
	document.write("",'<BR/>');
	document.write(" El area del rectangulo es de ",area,'<BR/>');
	document.write("El perimetro del rectangulo es de ",perimetro,'<BR/>');


