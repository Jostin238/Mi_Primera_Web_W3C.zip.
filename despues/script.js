// Muestra un mensaje cuando se presiona el boton.
document.addEventListener("DOMContentLoaded", function () {
    var boton = document.getElementById("boton-mensaje");

    if (boton) {
        boton.addEventListener("click", function () {
            document.getElementById("mensaje").textContent =
                "Gracias por visitar mi pagina.";
        });
    }
});
