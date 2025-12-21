// Cerrar sesión y mandar al login
function logoutUser() {
  localStorage.removeItem("session"); // borra la sesión
  alert("Sesión cerrada correctamente.");
  window.location.href = "../auth/login.html"; // redirige al login
}

// Cancelar y mandar al perfil
function cancelLogout() {
  window.location.href = "../profile/profile.html"; // vuelve al perfil
}
