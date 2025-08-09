
const invitados = ["Alejandra", "Barbara", "Benito", "Carmina", "Dafne", "Enrique", "German", "Gabriel"];

function parejas(invitados){

    let i = 0;
    let j = 1;
    let palabra1 = invitados[i];
    let palabra2 = invitados[j];

    let puntero = 0;

    //console.log(palabra1,palabra2);

    if (invitados.length === 0){
        console.log('El arreglo esta vacío');
        return null;
    }

    let inicio = 0;
    let fin = invitados.length-1;

    let inicio1 = 0;
    let fin1 = palabra1.length-1;

    let inicio2 = 0;
    let fin2 = palabra2.length-1;

    const pareja_encontrada = [];


    while(inicio <= fin){
        while(inicio1 < fin1 && inicio2 < fin2){
            //console.log('paso1');
            if( palabra2 === undefined){

                console.log('No encontre nombres que coincidan');
                return null;
                
            }    
            else if (palabra1[puntero] === palabra2[puntero]){
                pareja_encontrada.push(palabra1,palabra2);
                console.log('pareja encontrada');
                console.log(pareja_encontrada);
                return null;

            }else if(palabra1[puntero] !== palabra2[puntero]){
                palabra1 = invitados[i++];
                palabra2 = invitados[j++];
                //console.log('entre');

            }
            else{
                console.log('El arreglo esta vacío')
            }
        }
        return 0;
    }
}

//console.log(parejas(invitados));

parejas(invitados);