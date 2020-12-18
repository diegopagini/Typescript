"use strict";
(function () {
    // class Avenger {
    //     nombre: string;
    //     equipo: string;
    //     nombreReal: string;
    //     puedePelear: boolean;
    //     peleasGanadas: number;
    //     constructor( nombre: string, equipo: string ){
    //         this.nombre = nombre;
    //         this.equipo = equipo;
    //     }
    // }
    var Avenger = /** @class */ (function () {
        // nombre: string;
        // equipo: string;
        // nombreReal: string;
        // puedePelear: boolean;
        // peleasGanadas: number;
        function Avenger(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
            if (puedePelear === void 0) { puedePelear = true; }
            if (peleasGanadas === void 0) { peleasGanadas = 0; }
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
        return Avenger;
    }());
    var antman = new Avenger('Antman', 'Capi');
    console.log(antman);
})();
