//Primer solución => Complejida cuadrática

//Función para ordener el arreglo que se recibe como parametro
const order = (array) => {
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length-1; j++){
            if(array[j] > array[j+1]){
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
    return array;
}

//Función para identificar los números repetidos
const identifyRepeatedNumbers = () => {
    //Declaración del arreglo que se va a pasar como parametro a order
    let array = [4,2,4,5,2,3,1];

    //Asignación del arrelog ordenado que retorna la función order a la variable orderArray
    let orderArray = order(array);
    console.log(orderArray)

    //Arreglo para guardar los números repetidos
    let repeatedNumbers = [];

    console.log(orderArray.length);
    for(let i=0; i<orderArray.length-1; i++){
        if(orderArray[i] == orderArray[i+1]){
            repeatedNumbers.push(orderArray[i]);
        }
    }

    console.log(repeatedNumbers);
}

identifyRepeatedNumbers();

//Segunda solución

