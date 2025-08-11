
const parrafo = "El separador es una expresion regular que contiene paréntesis de captura, entonces cada vez que el separador concuerda, los resultados incluído cualquier resultado indefinido de los paréntesis de captura son divididos en el array resultante Sin embargo no todos los navegadores soportan esta característica";

const espacio = " ";
const coma = ",";

function palLarga (parrafo, sep1, sep2){
    const arrayLetras = parrafo.split(new RegExp([sep1, sep2].join("|"), "g"));

    //console.log(arrayLetras);

    let i = 0;

    let palabra = arrayLetras[i];
    let palabra1 = arrayLetras[i + 1];

    //console.log(palabra);

    const nuevas = [];
        
        while (i < arrayLetras.length - 1) {
            if (palabra.length > palabra1.length) {
                console.log('paso1', palabra, palabra1);
                nuevas.push(palabra);
            } else {
                console.log('paso2', palabra, palabra1);
                nuevas.push(palabra1);
                palabra = palabra1; 
            }

            i++;
            palabra1 = arrayLetras[i + 1];
        }

        const ultima = nuevas[nuevas.length - 1];
        console.log("La más larga es:", ultima);
        return ultima;
    }

    

let resultado = palLarga(parrafo, espacio, coma);
