document.addEventListener("DOMContentLoaded", () => {
  // Botón Usuario → perfil
  document.getElementById("btnUser").addEventListener("click", () => {
    window.location.href = "../profile/profile.html";
  });

  // Botón Admin → formulario de clave
  document.getElementById("btnAdmin").addEventListener("click", () => {
    window.location.href = "../auth/security.html";
  });
});
