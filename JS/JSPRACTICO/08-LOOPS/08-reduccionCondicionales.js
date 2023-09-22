function conseguirTipoSuscripcion (suscripcion){

    if(suscripcion == 'Free'){
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    if(suscripcion == 'Basic'){
        console.log("Puedes tomar casi todos los cursos de Platzi");
        return;
    }
    if(suscripcion == 'Expert'){
        console.log("Puedes tomar casi todos los cursos de platzi durante un año");
        return;
    }
    if(suscripcion == 'ExpertDuo'){
        console.log("Tu y alguien mas pueden tomar TODOS los cursos");
        return;
    }

    console.warn("NO EXISTE ESTO");
}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

conseguirTipoSuscripcion("Free");

const otraSolucion = {
    Free:"Solo puedes tomar los cursos gratis",
    Basic:"Puedes tomar casi todos los cursos de Platzi",
    Expert:"Puedes tomar casi todos los cursos de platzi durante un año",
    ExpertDuo:"Tu y alguien mas pueden tomar TODOS los cursos"
}

var encontrarSolucion = (tipo) => {
     console.log(otraSolucion[tipo]); 
}

encontrarSolucion("Expert");

