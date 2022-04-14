
//Formulario de contacto

//Registro de usuario con constructor y pusheo en el array
class consulta {
    constructor (nombre, apellido, email, telefono, descripcion){
        this.nombre = nombre,
        this.apellido = apellido,
        this.email = email,
        this.telefono = telefono,
        this.descripcion = descripcion;
    }
}

let listaConsulta = [];

function agregarConsulta(){
    let nombre = prompt("Indique su nombre de usuario");
    let apellido = prompt("Indique su apellido");
    let email = prompt("Ingrese su correo electrónico");
    let telefono = parseInt(prompt("Ingrese su numero de telefono"));
    let descripcion = prompt("Ingrese brevemente cual es su consulta a ser respondida");
    let nuevaConsulta = new consulta (nombre, apellido, email, telefono, descripcion);
    listaConsulta.push(nuevaConsulta);
}

listaConsulta.push(new consulta("guillermo","varela","guillevarela@gmail.com", "Me gustaria poder tener mas informacion de fechas disponibles para una sesion"));

while(confirm("¿Desea registrar otra consulta?")){
    agregarConsulta();
}

//Muestro lista usuario
console.log(listaConsulta);