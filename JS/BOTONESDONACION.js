let montoSeleccionado = null;

document.querySelectorAll(".btn-monto").forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelectorAll(".btn-monto")
            .forEach(b => b.classList.remove("selected"));

        btn.classList.add("selected");
        montoSeleccionado = btn.getAttribute("data-value");

        document.getElementById("montoPersonal").value = "";
    });
});

document.getElementById("donationForm").addEventListener("submit", function(e){
    e.preventDefault();

    // Validación de campos
    const campos = ["pais", "correo", "nombre", "apellido", "direccion", "estado"];
    
    for (let id of campos) {
        if (document.getElementById(id).value.trim() === "") {
            alert("Esta página dice: Faltan datos por completar.");
            return;
        }
    }

    // Validación del monto

    if (!montoSeleccionado) {
        alert("Esta página dice: Seleccione un monto.");
        return;
    }

    alert("Información correcta, gracias por su aportación.");

    location.reload();
});
