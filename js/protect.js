// Autenticación de Administradores
document.addEventListener("DOMContentLoaded", () => {
  const session = JSON.parse(localStorage.getItem("session") || "{}");

  if (!session.username) {
    alert("Debes iniciar sesión.");
    window.location.href = "../auth/login.html";
    return;
  }

  if (session.role !== "admin") {
    alert("Acceso denegado. Debes ser administrador.");
    window.location.href = "../profile/profile.html";
  }
});
