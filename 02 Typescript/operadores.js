//operadores
var arregloNumeros = [1, 2, 3, 4, 5];
//let arregloUsuarios: Array<UsuarioArreglo> = [
var arregloUsuarios = [
    { nombre: 'Alex', edad: 26 },
    { nombre: 'Alberto', edad: 24 },
    { nombre: 'Adrian', edad: 23 },
    { nombre: 'Andres', edad: 27 },
    { nombre: 'Arturo', edad: 28 }
];
//fat arrows functions
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
console.log(sumarDosNumeros(1, 2));
var potenciaDeUnNumero = function (numero) {
    return numero * numero;
};
var potenciaDeUnNumeroV2 = function (numero) { return numero * numero; };
var sumarDosNumerosV2 = function (numeroUno, numeroDos) { return numeroUno * numeroDos; };
var sumaTotal = 0;
var resultadoForEach = arregloNumeros.forEach(function (valorActual, indiceActual, arreglo) {
    sumaTotal = sumaTotal + valorActual;
    console.log(valorActual);
    console.log(indiceActual);
    console.log(arreglo);
});
console.log(resultadoForEach);
console.log(sumaTotal);
var resultadoSumaConReduce = arregloNumeros.reduce(function (valorAcumuladoActual, valorActualArreglo) {
    console.log('valorAcumuladoActual', valorAcumuladoActual);
    console.log('valorActualArreglo', valorActualArreglo);
    return valorAcumuladoActual - valorActualArreglo;
}, 20);
console.log(resultadoSumaConReduce);
var resultadoEdadDeUsuarios = arregloUsuarios.reduce(function (acumuladoEdad, usuario) {
    return acumuladoEdad + usuario.edad;
}, 0);
console.log(resultadoEdadDeUsuarios);
var nuevoArregloUsuarios = arregloUsuarios.map(function (usuario) {
    usuario.becado = false;
    return usuario;
}).map(function (usuario) {
    usuario.deuda = calcularDeuda(usuario.edad);
    return usuario;
}).filter(function (usuario) {
    return usuario.deuda < 31;
}) /*.some(
    (usuario:UsuarioArreglo)=>{
        return usuario.edad < 25
    }
)*/;
console.log('Nuevo Arreglo de Usuarios', nuevoArregloUsuarios);
function calcularDeuda(edadUsuario) {
    var totalEdad = arregloUsuarios.reduce(function (total, usuario) {
        return total + usuario.edad;
    }, 0);
    return totalEdad * (edadUsuario / 100);
}
