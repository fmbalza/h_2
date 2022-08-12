/**
 * ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"]
 * 
 * anexar al array result los items con los indices impares
 * formula (n % 2 == 1) para obtener un indice impar
 * 
 * example =>
 * if(indice % 2 == 1){
 *   ...
 * }  
 * 
 * 
    output => ["bar","qux","octo","foobar"]   
 */
let arr = ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"];
let result = [];

for(let idx = 0; idx < arr.length; idx++){
   if(idx % 2 == 1){
      result.push(arr[idx]);
   }
}

//export result
module.exports = result;