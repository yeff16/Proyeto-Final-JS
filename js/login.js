// Inicio de sesion del (usuario) o (administrador)
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    loginUser();
  });

function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || []; // Obtener los usuarios almacenados en el almacenamiento local
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    alert("Inicio de sesión exitoso");
    window.location.href = "auth.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}
