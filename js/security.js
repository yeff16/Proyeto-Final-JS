document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("adminAuthForm");
  if (!form) return; // Si no existe el formulario, no hace nada.

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const clave = document.getElementById("adminKey").value.trim();

    if (clave === "Chocolate") {
      let session = JSON.parse(localStorage.getItem("session") || "{}");

      if (session.username) {
        // Actualizar rol en sesión
        session.role = "admin";
        localStorage.setItem("session", JSON.stringify(session));

        // Actualizar rol en la lista de usuarios.
        let users = JSON.parse(localStorage.getItem("users") || "[]");
        users = users.map((u) => {
          if (u.username === session.username) {
            u.role = "admin";
          }
          return u;
        });
        localStorage.setItem("users", JSON.stringify(users));
      }

      alert("Acceso concedido como administrador.");
      window.location.href = "../admin/admin.html";
    } else {
      alert("Clave incorrecta. Serás redirigido a tu perfil.");
      window.location.href = "../profile/profile.html";
    }
  });
});
