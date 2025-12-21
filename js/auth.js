// Funciones para manejar usuarios en localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}
function setUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Registro de usuarios
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !email || !password) {
      alert("Completa todos los campos, Por favor.");
      return;
    }

    const users = getUsers();

    if (users.some((u) => u.username === username)) {
      alert("Ese usuario ya existe.");
      return;
    }
    if (users.some((u) => u.email === email)) {
      alert("Ese correo ya está registrado.");
      return;
    }

    // Por defecto todos se crean como "user"
    users.push({ username, email, password, role: "user" });
    setUsers(users);

    alert("Usuario registrado con éxito");
    window.location.href = "./login.html";
  });
}

// Login de usuarios
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = getUsers();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      alert("Usuario o contraseña incorrectos.");
      return;
    }

    // Guardar sesión con rol actual
    localStorage.setItem(
      "session",
      JSON.stringify({
        username: user.username,
        role: user.role,
      })
    );

    alert("Inicio de sesión exitoso");
    window.location.href = "./user.html";
  });
}
