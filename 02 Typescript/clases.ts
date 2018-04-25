console.log("Hola mundo");
let hola: number | string;
//let hola:any;
const adios = 'Adios';
hola = 1;
hola = '123';
//adios = 'asdfasdf'    no permite cambiar por const
//Duck typing
let nombre: string = 'Alex';
let edad: number = 26;
let casado: boolean = false;
let fechaNacimiento: Date = new Date();

class Usuario {
    nombre: string;
    private casado: boolean;
    protected edad: number;

    constructor(nombre: string,
                casado: boolean,
                edad: number) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
}
let vicente = {
    nombre:'Vicente',
    casado: true,
    edad: 28
};
let alex: Usuario = new Usuario('Alex', false, 28);
console.log(alex);
console.log(vicente);

class UsuarioDos{
    constructor(public nombre:string,
                private _casado:boolean,
                protected _edad:number){
    }
    get casado(){
        return this._casado;
    }
    set casado(casado: boolean){
        this._casado = casado;
    }
    imprimirUsuario(saludo:string):string{
        //Template Strings
        return `${saludo}.Mi nombre es ${this.nombre}, mi edad es ${this._edad}
         estoy casado ${this._casado}`;
    }
}
let alexDos = new UsuarioDos('Javier',true,29);
console.log(alexDos);
console.log(alexDos.imprimirUsuario('Hola soy goku'));

let carla: UsuarioTres = {
    nombre: '',
    casado: false,
    edad: 30
};
interface UsuarioTres {
    nombre:string;
    casado?:boolean;
    edad:number;
}