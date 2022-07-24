function mensajeEnviado() {
    const nombre = document.querySelector("#nombreContacto").value;
    console.log(nombre);

    const correo = document.querySelector("#correoContacto").value;
    console.log(correo);

    const comentario = document.querySelector("#comentarioContacto").value;
    console.log(comentario);


    alert(`Nombre: ${nombre}, correo: ${correo}, comentarios: ${comentario}.`);

}