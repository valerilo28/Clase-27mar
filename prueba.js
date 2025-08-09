
function parejas(palabra1,palabra2){

    let inicio1 = 0;
    let fin1 = palabra1.length-1;

    let inicio2 = 0;
    let fin2 = palabra2.length-1;

    let puntero = 0;
    //console.log('paso1');
    const pareja_encontrada = [];

    while(inicio1 < fin1 && inicio2 < fin2){
        //console.log('paso1');
        if (palabra1[puntero] === palabra2[puntero]){
            pareja_encontrada.push(palabra1,palabra2);
            console.log('pareja encontrada');

            console.log(pareja_encontrada);

            return null;

        } else if(palabra1[puntero] !== palabra2[puntero])
        {
            console.log('No coincide');
            return null;
        }
        else{
            console.log('No hay palabras');
        }
    }
    return 0;
}

console.log(parejas("invitados", "isla"));