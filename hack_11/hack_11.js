/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

function reemplazar(str, charBuscado, charReemplazo){

    //Recorre el string hasta encontrar alguna coincidencia
    for(let idx = 0; idx < 4; idx++){

        //Si encuentra una coincidencia, ejecutar el código
        if(str[idx] == charBuscado){

            //El string será igual a un slice desde el inicio hasta la coincidencia, luego se concatena el caracter deseado
            //y por último se concatena el resto del string
            str = str.slice(0, idx) + charReemplazo + str.slice(idx + 1);
        }
    }
    return str
}

//Función para fusionar arrays
result = numberArray.concat(stringArray);

for(i = 0; i < result.length; i++){
    if(result[i] == 1) {
        result.splice(i, 1, "one");
    }

    if(result[i] == 3) {
        result.splice(i, 1, "three");
    }

    if(result[i] == 5) {
        result.splice(i, 1, "five");
    }

    if(result[i] == "foo"){
       result[i] = reemplazar(result[i], "o", "0")
    }

    if(result[i] == "bar"){
        result[i] = reemplazar(result[i], "b", "B")
    }

    if(result[i] == "baz"){
        result[i] = reemplazar(result[i], "a", "@")
    }

    if(result[i] == "qux"){
        result[i] = reemplazar(result[i], "x", "X")
    }

    if(result[i] == "echo"){
        result[i] = reemplazar(result[i], "e", "3")
        result[i] = reemplazar(result[i], "o", "0")
    }
}

result.unshift("h@ck");
result.splice(numberArray.length + 1 , 0, "h@ck");
result.push("h@ck");

//export result
module.exports = result;