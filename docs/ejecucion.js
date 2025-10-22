function mostrarReceta(idReceta){
    const panel = document.getElementById(idReceta);

    if(panel){
        panel.style.display = 'flex';
        panel.style.justifyContent = 'center';
        panel.style.alignItems = 'center';
    }
}

function cerrarReceta(idReceta){
    const panel = document.getElementById(idReceta);

    if(panel){
        panel.style.display = 'none';
    }
}
