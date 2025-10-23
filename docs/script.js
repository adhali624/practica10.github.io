// Tomamos los elementos del HTML
const imagen = document.getElementById("imagen");
const panel = document.getElementById("panel");
const cerrarBtn = document.getElementById("cerrarBtn");

// Función para mostrar el panel
function mostrarReceta() {
  panel.style.display = "flex";
}

// Función para cerrar el panel
function cerrarReceta() {
  panel.style.display = "none";
}

// Cuando se da clic en la imagen, muestra el panel
imagen.addEventListener("click", mostrarReceta);

// Cuando se da clic en el botón, cierra el panel
cerrarBtn.addEventListener("click", cerrarReceta);
