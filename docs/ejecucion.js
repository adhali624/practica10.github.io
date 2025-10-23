const imagen = document.getElementById("imagen");
const panel = document.getElementById("panel");
const cerrarBtn = document.getElementById("cerrarBtn");

function mostrarReceta() {
  panel.style.display = "flex";
}

function cerrarReceta() {
  panel.style.display = "none";
}

imagen.addEventListener("click", mostrarReceta);
cerrarBtn.addEventListener("click", cerrarReceta);
