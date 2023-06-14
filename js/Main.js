function animadas(){
    
    // capturamos los conetnedores de las tarjetas
    let botonAventuras = document.getElementById('btn-aventuras');
    let botonDramas = document.getElementById('btn-dramas');
    let botonAnimadas = document.getElementById('btn-animadas');

    // caturamos los botones
    let contAventuras = document.getElementById('aventutas');
    let contAnimadas = document.getElementById('animadas');
    let contDramas = document.getElementById('dramas');

    botonAnimadas.classList.add("active");
    contAnimadas.classList.add("active");

    botonAventuras.classList.remove("active");
    contAventuras.classList.remove("active");


    botonDramas.classList.remove("active");
    contDramas.classList.remove("active");

}
function dramas() {

    // capturamos los conetnedores de las tarjetas
    let botonAventuras = document.getElementById('btn-aventuras');
    let botonDramas = document.getElementById('btn-dramas');
    let botonAnimadas = document.getElementById('btn-animadas');

    // caturamos los botones
    let contAventuras = document.getElementById('aventutas');
    let contAnimadas = document.getElementById('animadas');
    let contDramas = document.getElementById('dramas');

    botonDramas.classList.add("active");
    contDramas.classList.add("active");

    botonAnimadas.classList.remove("active");
    contAnimadas.classList.remove("active");

    botonAventuras.classList.remove("active");
    contAventuras.classList.remove("active");

}

function aventuras() {

    // capturamos los conetnedores de las tarjetas
    let botonAventuras = document.getElementById('btn-aventuras');
    let botonDramas = document.getElementById('btn-dramas');
    let botonAnimadas = document.getElementById('btn-animadas');

    // caturamos los botones
    let contAventuras = document.getElementById('aventutas');
    let contAnimadas = document.getElementById('animadas');
    let contDramas = document.getElementById('dramas');

    botonAventuras.classList.add("active");
    contAventuras.classList.add("active");

    botonDramas.classList.remove("active");
    contDramas.classList.remove("active");

    botonAnimadas.classList.remove("active");
    contAnimadas.classList.remove("active");

    

}

function modal() {
    let contModal = document.getElementById("modal");
    // le agreagamos la clase para que se muestre cuando le demos click al boton
    contModal.classList.add("active");
    
}

function cerrarM() {
    let contModal = document.getElementById("modal");
    // le quitamos la clase para que se quite el modal
    contModal.classList.remove("active");
    
}

function activarMenu() {
    let contMenu = document.getElementById("menu");

    contMenu.classList.toggle("active");
}