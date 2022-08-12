/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

//result tendrá los items de arr, sin contar al primero ni el último
result = arr.slice(1, arr.length - 1);

let resLen = result.length - 1;

//El primer for recorre el array result
for(let i = 0; i <= resLen; i++){

    //Este segundo for recorre los strings item de result
    for(let j = 0; j < 5; j++){

        //Si el string item i del array result tiene "a" en su posicion j, ejecuta el siguiente código 
        if(result[i][j] == "a"){

            //El string item será igual a un slice desde el inicio hasta la posicion donde se encontró la coincidencia
            //Se le concatena la coincidencia y luego se concatena un slice desde la posicion de coincidencia hasta el resto del string
            result[i] = result[i].slice(0, j) + "@" + result[i].slice(j + 1)
        }
    }
}

//Método alternativo
// for(let i = 0; i <= resLen; i++){
//     result[i] = result[i].replace("a", "@");
// }

//Toma el item en la última posición y lo convierte en mayúsculas
result[resLen] =  result[resLen].toUpperCase();

//export result
module.exports = result;