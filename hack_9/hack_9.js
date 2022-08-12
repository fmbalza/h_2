/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;

arr.map(function(items){
    if(items[0] == "b") result++;
    return result;
})

//export result
module.exports = result;