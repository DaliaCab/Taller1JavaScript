//Programa que recibe arreglo 'numeros' y retorna los pares en otro arreglo, con funciones
function soloPar(numeros){
    let pares = [];
    for (let i = 0; i<numeros.length; i++){
        if (numeros[i] % 2 == 0){        //Si es par el residuo debe ser 0
           pares.push(numeros[i]);      //Si es par se incluye en el arreglo
        }
    }
    return pares;
}

let numeros = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10, 12];
console.log(soloPar(numeros));  //Llamo a la función con el arreglo numeros