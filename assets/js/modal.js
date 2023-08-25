 // Obtener los elementos del DOM
 const openModalBtn = document.getElementById("openModal");
 const closeModalBtn = document.getElementById("closeModal");
 const modal = document.getElementById("modal");

 // Abrir el modal al hacer clic en el botón de "Abrir modal"
 openModalBtn.addEventListener("click", function() {
   modal.style.display = "block";
 });

 // Cerrar el modal al hacer clic en el botón de cierre (x)
 closeModalBtn.addEventListener("click", function() {
   modal.style.display = "none";
 });

 // Cerrar el modal al hacer clic fuera del contenido del modal
 window.addEventListener("click", function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 });