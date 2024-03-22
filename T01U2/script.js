document.addEventListener("DOMContentLoaded", function() {
  const menu = document.querySelector('.menu');
  const acapite1 = document.getElementById('acapite1');
  const acapite2 = document.getElementById('acapite2');
  const content = document.getElementById('content');
  const btnSaludar = document.getElementById('btnSaludar');

  acapite1.addEventListener('click', function() {
    content.innerHTML = <button id="btnSaludar">Saludar</button>
  });

  acapite2.addEventListener('click', function() {
    content.innerHTML = `
      <form id="formulario">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <button type="submit">Enviar</button>
      </form>
    `;
  });

  btnSaludar.addEventListener('click', function() {
    alert('¡Bienvenido!');
    content.innerHTML = '';
  });

  menu.addEventListener('click', function() {
    menu.classList.toggle('show');
  });
});

