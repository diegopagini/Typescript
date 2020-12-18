"use strict";
(function () {
    var enviarMision = function (xmen) {
        console.log("Enviando a " + xmen.nombre + " a la misi\u00F3n");
    };
    var regresarAlCuartel = function (xmen) {
        console.log("Enviando a " + xmen.nombre + " a la misi\u00F3n");
    };
    var wolverine = {
        nombre: 'Logan',
        edad: 60
    };
    enviarMision(wolverine);
    regresarAlCuartel(wolverine);
})();
