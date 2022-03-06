
	// Mateo Castro
	// Ingrese la cantidad de alumnos aprobados y desaprobados de un curso, luego
	// mostrar el porcentaje de estudiantes aprobados y el porcentaje de estudiantes desaprobados.
	var aprobados = new Number();
	var desaprobados = new Number();
	var total = new Number();
	alert("Ingrese la cantidad total de estudiantes",'<BR/>');
	total = Number(prompt());
	alert("Ingrese la cantidad de estudiantes aprobados",'<BR/>');
	aprobados = Number(prompt());
	alert("Ingrese la cantidad de estudiantes desaprobados",'<BR/>');
	desaprobados = Number(prompt());
	aprobados = (aprobados*100)/total;
	desaprobados = (desaprobados*100)/total;
	document.write("el porcentaje de estudiantes aprobados es el: ",aprobados," %",'<BR/>');
	document.write("el porcentaje de estudiantes reprobados es el: ",desaprobados," %",'<BR/>');


