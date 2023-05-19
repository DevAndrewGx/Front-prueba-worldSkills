function animadas(){
    
    let botonAventuras = document.getElementById('btn-aventuras');
    let botonDramas = document.getElementById('btn-dramas');
    let botonAnimadas = document.getElementById('btn-animadas');

    let contAventuras = document.getElementById('aventuras');
    let contAnimadas = document.getElementById('animadas');
    let contDramas = document.getElementById('dramas');

 


    botonAnimadas.classList.add('active');
    contAnimadas.classlist.remove('ocultar');

    botonAventuras.classList.remove('active');
    contAventuras.classlist.add('ocultar');

    botonDramas.classList.remove('active');
    contDramas.classlist.add('ocultar');

}