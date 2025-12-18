// Registro de nuevos usuarios al sistema
localStorage.setItem("users", JSON.stringify([]));
document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    registerUser();
  });

function registerUser() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = users.find(
    (user) => user.username === username || user.email === email
  );

  if (existingUser) {
    alert("El usuario o correo electrónica ya están registrados.");
  } else {
    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registro exitoso");
    window.location.href = "login.html";
  }

  alert("Registro exitoso");
  window.location.href = "login.html";
}
