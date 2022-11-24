//cambiar fondo de la pagina cada 1 segundo
var body = document.querySelector('body');
var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange'];
setInterval(function () {
    var color = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = color;
}, 1000);