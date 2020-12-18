"use strict";
(function () {
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Droga'
    };
    var extraer = function (_a) {
        // const { nombre, poder } = avenger;
        var nombre = _a.nombre, poder = _a.poder;
        console.log(nombre);
        console.log(poder);
    };
    // extraer( avenger );
    var avengers = ['Thor', 'Ironman', 'Spiderman'];
    var arana = avengers[2];
    // console.log( loki );
    // console.log( hombre );
    // console.log( arana );
    var extraerArr = function (_a) {
        var thor = _a[0], ironman = _a[1], spiderman = _a[2];
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    };
    extraerArr(avengers);
})();
