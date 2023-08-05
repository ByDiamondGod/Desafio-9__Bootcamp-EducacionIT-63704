// parte 8 - bonus 2, falta terminar, necesito aprender mas
let telon = document.querySelectorAll('#cajas > div');

for (let i = 0; i < telon.length; i++) {
    let cajasTelon = telon[i];

  cajasTelon.addEventListener('click', function () {
      
      if (this.hasAttribute('title')) {
            this.removeAttribute('title');
      } else {
            this.setAttribute('title', 'Presentado');
      }
  });
}

// Parte 6
let botonClickear = document.querySelector('#botonClick');

botonClickear.addEventListener('click', function () {

    // Parte 7 - bonus 1, falta terminar, necesito aprender mas
    let bienvenidaPersonaje = document.querySelector('div[title="Presentado"]');

    if (bienvenidaPersonaje) {
        bienvenidaPersonaje.removeAttribute('title');
    }

    // Parte 1
    bienvenidaPersonaje = prompt(
        '¿Quien se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)',
    );

    // bonus mio personal -> validacion de ingreso
    if (bienvenidaPersonaje === '' || bienvenidaPersonaje === null) {
        console.log('No se ingreso ningun personaje');
    } else {
        console.log(
            'Bienvenido ' + bienvenidaPersonaje + ' al mundo de Mario Bros',
        );
    }

    let nombrePresentado = document.querySelector('#nombreInvitado');

    nombrePresentado.textContent = bienvenidaPersonaje;

    // Parte 3 - 1/2 + bonus mio personal
    if (bienvenidaPersonaje !== null) {
        bienvenidaPersonaje = bienvenidaPersonaje.toLowerCase();
    }

    // Parte 2
    let nombreSpan = document.querySelector('#nombreInvitado');

    switch (bienvenidaPersonaje) {
        case 'mario':
            nombreSpan.textContent = 'Mario bros';
            break;
        case 'luigi':
            nombreSpan.textContent = 'Luigi';
            break;
        case 'bowser':
            nombreSpan.textContent = 'Bowser Morton Koopa';
            break;
        case 'peach':
            nombreSpan.textContent = 'Princesa Peach Toadstool';
            break;
        case 'yoshi':
            nombreSpan.textContent = 'T. Yoshisaur Munchakoopas';
            break;
        case 'toad':
            nombreSpan.textContent = 'Toad';
            break;

        case 'toadette':
            document.querySelector('#nombreInvitado').textContent = 'Toadette';
            break;
        case 'daisy':
            document.querySelector('#nombreInvitado').textContent =
                'Princesa Daisy';
            break;
        default:
            document.querySelector('#nombreInvitado').textContent =
                '(desconocido)';
    }

    // Parte 3 - 2/2

    bienvenidaPersonaje = document.getElementById(bienvenidaPersonaje);

    if (bienvenidaPersonaje) {
        bienvenidaPersonaje.setAttribute('title', 'Presentado');
    }

    // Parte 4 y 5 en el CSS
});
