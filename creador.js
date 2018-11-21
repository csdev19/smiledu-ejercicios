var datos = datos
var objeto_json = {
	'datos': []
}

const MAYORIA_DE_EDAD = 18
const FECHA_ACTUAL = 2018

function calcularEdad (nacimiento) {
	return FECHA_ACTUAL - nacimiento
}

function validarEdad (edad) {

	if (edad < MAYORIA_DE_EDAD) {
		return 'Es menor de edad'
	} else {
		return 'Es mayor de edad'
	}
}

function validarApellido (apellido) {
	if (apellido.length > 11) {
		return apellido.slice(0,11) + '...'
	} else {
		return apellido 
	}
}


function obtenerUsuario (correo) {
	let indexArroba = correo.search('@')
	return correo.slice(0, indexArroba)
}

function validarJSON (datos) {
	for(var i= 0; i < datos.length; i++) {
	    datos[i]['apellido'] = validarApellido(datos[i]['apellido']),
	    datos[i]['nombre_usuario'] = obtenerUsuario(datos[i]['correo']),
	    datos[i]['edad'] = calcularEdad(datos[i]['fecha_de_nacimiento'])
	}	
}

validarJSON(datos)
objeto_json.datos = datos


document.write("<table>");
document.write("<th>Nombre </th>")
document.write("<th>apellidos </th>")
document.write("<th>dni</th>")
document.write("<th>distrito</th>")
document.write("<th>correo</th>")
document.write("<th>nombre de usuario</th>")
document.write("<th>edad</th>")
document.write("<th>fecha de nacimient</th>")
document.write("<th>hobbies</th>")

for(var i = 0; i < objeto_json['datos'].length; i++){
	document.write("<tr>")
	document.write("<td>" + objeto_json['datos'][i]['nombre']+ "</td>")
	document.write("<td>" + objeto_json['datos'][i]['apellido']+ "</td>")
	document.write("<td>" + objeto_json['datos'][i]['dni']+ "</td>")
	document.write("<td>" + objeto_json['datos'][i]['distrito']+ "</td>")
	document.write("<td>" + objeto_json['datos'][i]['correo']+ "</td>")
	document.write("<td>" + objeto_json['datos'][i]['nombre_usuario']+ "</td>")
	document.write("<td>" + objeto_json['datos'][i]['edad']+ "</td>")
	document.write("<td>" + objeto_json['datos'][i]['fecha_de_nacimiento']+ "</td>")
	document.write("<td>" + objeto_json['datos'][i]['hobbies']+ "</td>")
	document.write("</tr>")
}
document.write("</table>");











