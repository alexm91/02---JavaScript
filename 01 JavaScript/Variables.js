console.log('Hola Mundo');
var mutar;
var nombre = 'Alex';
var edad = 26;
var peso = 63.5;
var casado = false;
var fechaNacimiento = new Date();
var noExisto = null; //false
var noEstoyDefinido = undefined; //false
var a = -1;
var b = 0;
var c = 1;
// cmd + a = seleccionarTodo
// cmd + alt + l = indentar
if(noExisto){
    console.log('Verdadero');
}else{
    console.log('Falso');
}

//Json
//Objetos!
var usuario = {
    nombre:'Alex',
    apellido: 'Morales',
    cedula: '1721768339',
    edad: 26,
    imprimir: function(){
        console.log(this.nombre +' '+ this.apellido+ ' '+ this.edad);
    }
};
console.log(usuario.nombre);
console.log(usuario);
//delete usuario.edad;
console.log(usuario);
usuario.fechaNacimiento = new Date();
console.log(usuario);
usuario.mascotas = {};
usuario.mascotas.nombre = 'Adrian';
console.log(usuario);
//Arreglos: Al no ser definidos se puede tener un arreglo con varios tipos de datos
var arreglo =[
    1,
    "Alex",
    true,
    new Date(),
    undefined,
    {
        nombre: 'Alex'
    },
    [1,2,3]
];
console.log(arreglo);

//funciones
function sumarNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}
console.log(sumarNumeros(1,2));
console.log(sumarNumeros(1,2.234));
//de esta forma no es necesario poner el nombre de la funcion -> funciones anonimas
var potenciaDeDosDeUnNumero = function(numero){
    return numero*numero;
};
console.log(potenciaDeDosDeUnNumero(2));
usuario.imprimir();
console.log(usuario.imprimir);