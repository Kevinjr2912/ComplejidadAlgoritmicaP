//Primer solución => Complejida cuadrática

//Función para ordener el arreglo que se recibe como parametro
const orderBubbleSort = (array) => {
    // Tiempo inicial
    let startTime = Date.now();
    // Contador para iteraciones de Bubble Sort
    let count = 0;
    // Contador para el número de intercambios realizados
    let swaps = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            // Va incrementando en cada comparación
            count++;
            if (array[j] > array[j + 1]) {
                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
                // Va incrementando en cada comparación
                swaps++;
            }
        }
    }

    // Tiempo final
    let endTime = Date.now();
    //Tiempo de ejecución
    let timeSeconds = (endTime - startTime) / 1000;

    console.log("\n\n\n-------------------------------- identifyRepeatedNumbersON2 ---------------------------------------------");
    console.log("\n\nTiempo de ejecución para ordenar en segundos BubleSort: " + timeSeconds)
    console.log("Número total de comparaciones durante el Bubble Sort: " + count);
    console.log("Número total de intercambios durante el Bubble Sort: " + swaps);
    return array;
}

//Función para identificar los números repetidos
const identifyRepeatedNumbersON2 = (array) => {
    //Contador para ver cuántas veces se itera por el arreglo
    let count = 0;

    //Arreglo ordenado que retorna la función order a la variable orderArray
    let orderArray = orderBubbleSort(array);

    //Arreglo para guardar los números repetidos
    let repeatedNumbers = [];

    // Medir el tiempo para identificar los números repetidos
    const startIdentifyTime = Date.now();

    // Contador para iteraciones en la búsqueda de duplicados
    let identifyCount = 0;

    for (let i = 0; i < orderArray.length - 1; i++) {
        identifyCount++;
        if (orderArray[i] == orderArray[i + 1]) {
            if (!repeatedNumbers.includes(orderArray[i])) {
                repeatedNumbers.push(orderArray[i]);
            }
        }
    }

    // Tiempo final en el proceso de números repetidos
    const endIdentifyTime = Date.now();
    //Tiempo total en segundos
    const identifyTimeInSeconds = (endIdentifyTime - startIdentifyTime) / 1000;

    
    console.log("Números repetidos (identifyRepeatedNumbersON2): " + repeatedNumbers);
    console.log("Número total de iteraciones (identifyRepeatedNumbersON2): " + identifyCount);
    console.log("Tiempo de ejecución en segundos (identifyRepeatedNumbersON2): " + identifyTimeInSeconds);
}

//Segunda solución
// Contador global para iteraciones de Merge Sort
let mergeSortIterations = 0;

// Función de Merge Sort
const mergeSort = (arr) => {
    mergeSortIterations++; // Incrementar contador en cada llamada

    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
};

// Contador global para iteraciones en Merge
let mergeIterations = 0;

// Función de Merge
const merge = (left, right) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        mergeIterations++; // Contador de iteraciones en Merge
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

// Función para determinar números repetidos después de ordenar con Merge Sort
const identifyRepeatedNumbersOLOGN = (arr) => {
    // Reiniciar contadores antes de la ejecución
    mergeSortIterations = 0;
    mergeIterations = 0;
    // Contador para iteraciones en la búsqueda de duplicados
    let duplicateSearchIterations = 0; 

    // Tiempo inicial
    const startTime = Date.now(); 

    const sortedArr = mergeSort(arr);
    const duplicates = [];

    // Encontrar duplicados en el arreglo ordenado
    for (let i = 1; i < sortedArr.length; i++) {
        duplicateSearchIterations++; // Incrementar el contador por cada iteración
        if (sortedArr[i] === sortedArr[i - 1] && !duplicates.includes(sortedArr[i])) {
            duplicates.push(sortedArr[i]);
        }
    }

    // Tiempo final
    const endTime = Date.now();
    // Tiempo en segundos 
    const timeElapsedInSeconds = (endTime - startTime) / 1000; 

    console.log("\n\n\n-------------------------------- identifyRepeatedNumbersOLOGN ---------------------------------------------");
    console.log('\n\nDuplicados (identifyRepeatedNumbersOLOGN): ' + duplicates);
    console.log('Número de iteraciones en la búsqueda de duplicados (identifyRepeatedNumbersOLOGN): ' + duplicateSearchIterations);
    console.log('Tiempo de ejecución en segundos (identifyRepeatedNumbersOLOGN): ' + timeElapsedInSeconds);
    console.log('Número de iteraciones en Merge Sort (identifyRepeatedNumbersOLOGN): ' + mergeSortIterations);
    console.log('Número de iteraciones en Merge (identifyRepeatedNumbersOLOGN): ' + mergeIterations);
}



//Tercera solución

// Función para identificar números repetidos con complejidad O(n) usando Sets
const identifyRepeatedNumbersON = (arr) => {
    // Set para rastrear números visitados
    const seen = new Set();
    // Set para rastrear números duplicados
    const duplicates = new Set();
    // Contador para el número de iteraciones
    let iterations = 0;
    // Tiempo inicial
    const startTime = Date.now();

    for (const num of arr) {
        // Incrementar el contador por cada elemento procesado
        iterations++;
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }

    // Tiempo final
    const endTime = Date.now();
    // Tiempo en segundos
    const timeElapsed = (endTime - startTime) / 1000;

    console.log("\n\n\n-------------------------------- identifyRepeatedNumbersON ---------------------------------------------")
    console.log("\n\nNúmeros repetidos (identifyRepeatedNumbersON): " + Array.from(duplicates));
    console.log("Número de iteraciones (identifyRepeatedNumbersON): " + iterations);
    console.log("Tiempo de ejecución en segundos (identifyRepeatedNumbersON): " + timeElapsed);
}

//Declaración del arreglo que se va a pasar como parametro a order
let array = [4, 5, 3, 1, 8, 12, 7, 15, 24, 55, 23, 65, 20, 19, 59, 199, 100, 129, 234, 300, 107, 34, 45, 43, 29, 48, 2, 84, 81, 70, 73, 21, 88, 23, 113, 289, 190, 194, 109, 4,301,340,345,500,530,540,680];
console.log("Array inicial => " + array);

identifyRepeatedNumbersON2(array);
identifyRepeatedNumbersON(array);
identifyRepeatedNumbersOLOGN(array);

