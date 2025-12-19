// Autenticación de administradores.
const adminKey = "Chocolate"; // Clave de administrador

document
  .getElementById("adminAuthForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const inputKey = document.getElementById("adminKey").value.trim();
    if (inputKey === adminKey) {
      window.location.href = "admin.html";
    } else {
      alert("Clave de administrador incorrecta"); // Mostrar mensaje de error al poner una clave incorrecta.
    }
  });
