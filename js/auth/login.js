document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    loginUser();
  });

function loginUser() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    // Guardar la sesión del usuario
    const session = { username: user.username };
    localStorage.setItem("session", JSON.stringify(session));

    alert("Inicio de sesión exitoso");
    window.location.href = "users.html"; // Redireccion
  } else {
    alert("Usuario o contraseña incorrectos, Por favor registrese.");
  }
}
