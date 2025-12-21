// Funciones para manejar usuarios en localStorage.
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}
function setUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Verificar si el usuario actual es admin
function isAdmin() {
  const session = JSON.parse(localStorage.getItem("session") || "{}");
  return session.username && session.role === "admin";
}

// Si no eres admin, no se activa nada.
if (!isAdmin()) {
  console.warn("No eres admin. CRUD deshabilitado.");
} else {
  // Crear usuario
  const createForm = document.getElementById("createForm");
  if (createForm) {
    createForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const role = document.getElementById("role").value;

      if (!username || !password) {
        alert("Completa todos los campos.");
        return;
      }

      let users = getUsers();
      if (users.some((u) => u.username === username)) {
        alert("Ese usuario ya existe.");
        return;
      }

      users.push({ username, password, role });
      setUsers(users);

      alert("Usuario creado con éxito.");
      window.location.href = "../../pages/admin/admin.html";
    });
  }

  // Actualizar usuario
  const updateForm = document.getElementById("updateForm");
  if (updateForm) {
    updateForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("usernameUpdate").value.trim();
      const newPassword = document.getElementById("newPassword").value.trim();
      const newEmail = document.getElementById("newEmail").value.trim();
      const newRole = document.getElementById("newRole").value;

      let users = getUsers();
      let user = users.find((u) => u.username === username);

      if (!user) {
        alert("Usuario no encontrado.");
        return;
      }

      if (newPassword) user.password = newPassword;
      if (newEmail) user.email = newEmail;
      if (newRole) user.role = newRole;

      setUsers(users);
      alert("Usuario actualizado con éxito.");
    });
  }

  // Eliminar usuario
  const deleteForm = document.getElementById("deleteForm");
  if (deleteForm) {
    deleteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("usernameDelete").value.trim();

      let users = getUsers();
      const newUsers = users.filter((u) => u.username !== username);

      if (users.length === newUsers.length) {
        alert("Usuario no encontrado.");
        return;
      }

      setUsers(newUsers);
      alert("Usuario eliminado con éxito.");
    });
  }

  // Mostrar lista de usuarios en tabla
  const userTable = document.getElementById("userTable");
  if (userTable) {
    const users = getUsers();

    if (users.length === 0) {
      userTable.innerHTML = `<tr><td colspan="3" class="text-center text-gray-400 py-2">No hay usuarios registrados.</td></tr>`;
    } else {
      userTable.innerHTML = users
        .map(
          (u) => `
        <tr class="border-b border-gray-700">
          <td class="py-2 px-4">${u.username}</td>
          <td class="py-2 px-4">${u.email ? u.email : "-"}</td>
          <td class="py-2 px-4">${u.role}</td>
        </tr>
      `
        )
        .join("");
    }
  }
}
