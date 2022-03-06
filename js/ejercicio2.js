
	// MATEO CASTRO
	// Realizar un programa en el que se ingresen los datos de un trabajador y nos de como resultado el sueldo que debe obtener en base a sus horas trabajadas.
	var sueldo;
	var nombre = new String();
	var horastrabajadas = new Number();
	var valorhora = new Number();
	alert("Ingrese el nombre del trabajador ",'<BR/>');
	nombre = prompt();
	alert("Ingrese horas trabajadas al mes",'<BR/>');
	horastrabajadas = Number(prompt());
	alert("Ingrese el valor por hora de trabajo",'<BR/>');
	valorhora = Number(prompt());
	sueldo = horastrabajadas*valorhora;
	document.write("El trabajador ",nombre," debe recibir una remuneracion de: ",sueldo," $",'<BR/>');


