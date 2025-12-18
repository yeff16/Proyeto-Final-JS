// Autenticacion de que sea administrador
const adminKey = "Chocolate";

function accessAdmin() {
  const admin = prompt("Ingrese la clave de administrador");
  if (admin === adminKey) {
    window.location.href = "./pages/admin.html";
  } else {
    alert("Clave de administrador incorrecta");
  }
  return false;
}
