console.log("Hola mundo");
var hola;
//let hola:any;
var adios = 'Adios';
hola = 1;
hola = '123';
//adios = 'asdfasdf'    no permite cambiar por const
//Duck typing
var nombre = 'Alex';
var edad = 26;
var casado = false;
var fechaNacimiento = new Date();
var Usuario = /** @class */ (function () {
    function Usuario(nombre, casado, edad) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
    return Usuario;
}());
var vicente = {
    nombre: 'Vicente',
    casado: true,
    edad: 28
};
var alex = new Usuario('Alex', false, 28);
console.log(alex);
console.log(vicente);
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, _casado, _edad) {
        this.nombre = nombre;
        this._casado = _casado;
        this._edad = _edad;
    }
    Object.defineProperty(UsuarioDos.prototype, "casado", {
        get: function () {
            return this._casado;
        },
        set: function (casado) {
            this._casado = casado;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioDos.prototype.imprimirUsuario = function (saludo) {
        //Template Strings
        return saludo + ".Mi nombre es " + this.nombre + ", mi edad es " + this._edad + "\n         estoy casado " + this._casado;
    };
    return UsuarioDos;
}());
var alexDos = new UsuarioDos('Javier', true, 29);
console.log(alexDos);
console.log(alexDos.imprimirUsuario('Hola soy goku'));
var carla = {
    nombre: '',
    casado: false,
    edad: 30
};
