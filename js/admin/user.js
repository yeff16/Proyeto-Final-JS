// Verificar si tiene sesión activa o no
const session = JSON.parse(localStorage.getItem("session"));

if (!session) {
  alert("No tienes una sesión activa. Por favor, inicia sesión.");
  window.location.href = "login.html";
  return;
}

// Obetener todos los usuarios
let users = JSON.parse(localStorage.getItem("users"));
if (!users) {
  users = [];
}

// Buscar el usuario actual
let currentUser = users.find((user) => user.username === session.username);

// Mostrar los datos del usuario actual
document.getElementById("username").textContent = currentUser.username;
document.getElementById("email").textContent = currentUser.email;
document.getElementById("password").textContent = currentUser.password;

// Actualizar los datos del usuario
document.getElementById("updateForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const updatedUsername = document.getElementById("updatedUsername").value;
  const updatedEmail = document.getElementById("updatedEmail").value;
  const updatedPassword = document.getElementById("updatedPassword").value;
  currentUser.username = updatedUsername;
  currentUser.email = updatedEmail;
  currentUser.password = updatedPassword;
  localStorage.setItem("users", JSON.stringify(users));
  alert("Datos actualizados correctamente");
});

// Guardar los cambios en el LocalStorage
localStorage.setItem("users", JSON.stringify(users));

alert("Perfil actualizado correctamente");
