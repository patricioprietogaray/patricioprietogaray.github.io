const tituloTablaProfesionales = [
    "ID",
    "NOMBRE",
    "DIAS DE ATENCION",
    "PROFESION",
]

const profesionales = [
    {
        id:"1",
        nombre: "Maria de las Mercedes Rimoli Echarren",
        diasAtencion: "Lun - Mie - Vie: 18 a 20hs",
        Profesion: "Acompañante Terapéutico",
    },
    {
        id:"2",
        nombre: "Patricio Prieto Garay",
        diasAtencion: "Lun - Mie - Vie: 9 a 12hs",
        Profesion: "Analista de Sistemas"
    },
    {
        id:"3",
        nombre: "María Soledad",
        diasAtencion: "Mar - Jue: 9 a 12hs",
        Profesion: "Diseñadora Gráfica"
    },
    {
        id:"4",
        nombre: "María Cecilia",
        diasAtencion: "Mar - Jue: 18 a 20hs",
        Profesion: "Doctora Biologa Fósil"
    },
    {
        id:"5",
        nombre: "Carlos",
        diasAtencion: "Lun: 18 a 20hs",
        Profesion: "Geólogo"
    },
    {
        id:"6",
        nombre: "Roberto Eduardo",
        diasAtencion: "Pedir turno",
        Profesion: "Tecnico Electrónico"
    },
    {
        id:"7",
        nombre: "Santiago Enrique",
        diasAtencion: "Lun - Mar: 10 a 12hs",
        Profesion: "Cultivador"
    },
    {
        id:"8",
        nombre: "Diamela Azul",
        diasAtencion: "Pedir turno",
        Profesion: "Comunicadora Social"
    },
    {
        id:"9",
        nombre: "Juan Ignacio",
        diasAtencion: "Suspendido hasta nuevo aviso",
        Profesion: "Estudiante"
    },
    {
        id:"10",
        nombre: "Nehuén",
        diasAtencion: "Pedir turno",
        Profesion: "Estudiante"
    },
    {
        id:"11",
        nombre: "Renata",
        diasAtencion: "Pedir turno",
        Profesion: "Estudiante"
    },
    {
        id:"12",
        nombre: "Sebastián",
        diasAtencion: "Suspendido hasta nuevo aviso",
        Profesion: "Estudiante"
    },
    {
        id:"13",
        nombre: "abccdario",
        diasAtencion: "Suspendido hasta nuevo aviso",
        Profesion: "Estudiante"
    },
]

function mostrarTituloListado(elementoId, etiqueta) {
    // encuentra por id
    const $rowTitle = document.getElementById(elementoId);

    //inicializo fragmento
    $fragmentoTituloListado=document.createDocumentFragment();

    //iteracion de los titulos que tendra el listado
    tituloTablaProfesionales.forEach(ttp => {
         // defino cada div de cada titulo
        const $divTitulo = document.createElement(etiqueta);
        // agrego el texto del titulo
        $divTitulo.textContent=ttp;
        // guardo el texto de cada div hijo
        $fragmentoTituloListado.appendChild($divTitulo);
    })
    // cargo los divs a la pagina y se muestran en el dom
    $rowTitle.appendChild($fragmentoTituloListado);
}

function mostrarListaDeProfesionales(elementoId, inicioParcial, finalParcial) {
    
    // console.log('function mostrarListaDeProfesionales');
    const $arrayParcialProfesionales = profesionales.slice(inicioParcial,finalParcial);
    // me posiciono en el elemento body-table
    $divBodyTable = document.getElementById(elementoId);
    // borro todo lo que contenga el elementoId
    // $divBodyTable.parentNode.removeChild($divBodyTable);

    // console.log('function mostrarListaDeProfesionales antes del FORRRRRR');
    for(let d in $arrayParcialProfesionales) {
        // console.log('function mostrarListaDeProfesionales - FOR');
        const $listaProfesionales=document.createElement("div");
        $listaProfesionales.setAttribute("class", "row-body");
        for( let e in profesionales[d]) {
            // console.log('function mostrarListaDeProfesionales - FOR- FOR');
            const $hilera=document.createElement("div");
            const $celda=document.createTextNode($arrayParcialProfesionales[d][e]);
            $hilera.appendChild($celda);
            $listaProfesionales.appendChild($hilera);
        }
        $divBodyTable.appendChild($listaProfesionales);
        // console.log($listaProfesionales);
    }
}

function borrarLista() {

    // console.log('function borrarLista');
    //posiciono en el elemento id
    const $posicionDiv = document.getElementById("body-table");

    // borrar todos los hijos del id "row-title"

    while ($posicionDiv.firstChild) {
        // me posiciono en el primer hijo y como es bucle borra todo
        $posicionDiv.removeChild($posicionDiv.firstChild);
    }
}

function getPressButton(pressButton) {
    if (pressButton=="prev") {
        // alert("previo");

        switch(rangoLista) {
            case "6-10":
                muestraListadoParcial("1-5");
                rangoLista="1-5";
                break;
            case "10-15":
                muestraListadoParcial("6-10");
                rangoLista="6-10";
                break;
            default:
                muestraListadoParcial("1-5");
                rangoLista="1-5";
                break;
        } 
    } else {
            // alert("posterior");
            
            switch(rangoLista) {
                case "1-5":
                    muestraListadoParcial("6-10");
                    rangoLista="6-10";
                    break;
                case "6-10":
                    muestraListadoParcial("10-15");
                    rangoLista="10-15";
                    break;
                default:
                    muestraListadoParcial("10-15");
                    rangoLista="10-15";
                    break;
            }
        }
    }

function muestraListadoParcial(rango) {
    borrarLista();
    switch(rango) {
        case "1-5":
            mostrarListaDeProfesionales("body-table",0,5);
            break;
        case "6-10":
            mostrarListaDeProfesionales("body-table",5,10);
            break;
        case "10-15":
            mostrarListaDeProfesionales("body-table",10,15);
            break;
        default:
            mostrarListaDeProfesionales("body-table",0,5);
            break;
    }
}

function mostrarListaDeProfesionalesCondicion() {
    // console.log('function mostrarListaDeProfesionalesCondicion');
    const $arrayTodosLosProfesionales = profesionales; //cargo todos los profesionales
    let $idProfesional, $nombreProfesional;
    // examino la condicion
    
    const condicion = document.querySelector("#searchText").value;
    // alert(condicion);
    let encontroCoincidencia = false;
    
    for(let a in profesionales) { //recorro el arreglo-objeto de profesionales
        for( let b in profesionales[a]) {
            const $celdaCond=document.createTextNode($arrayTodosLosProfesionales[a][b]);
            if($celdaCond.substringData(0,condicion.length)===condicion) {
                // console.log("encontro un ", condicion);
                encontroCoincidencia=true;
                $idProfesional = document.createTextNode($arrayTodosLosProfesionales[a].id);
                $nombreProfesional = document.createTextNode($arrayTodosLosProfesionales[a].nombre);
                // console.log('textNode.textcontext', $idProfesional.textContent);
            }
        }
        if(encontroCoincidencia===true) {
            const $elemArrayInicio = parseInt($idProfesional.textContent) - 1; //se debe transformar en nros (son textnode y 
            const $elemArrayFinal = parseInt($idProfesional.textContent);      // se transforman con textcontext
            // mostrarListaDeProfesionales("body-table",10,15)
            mostrarListaDeProfesionales("body-table", $elemArrayInicio, $elemArrayFinal);
            encontroCoincidencia=false;
        }
    }
}

function buscarProfesional() {
    // console.log('function buscarProfesional');
    borrarLista();
    
    mostrarListaDeProfesionalesCondicion(); //,$cadenaMayuscula, $longitudCadena);

}
 
let rangoLista = "1-5";
// muestro el titulo llamo a la funcion
mostrarTituloListado("row-title", "div");

// muestro el listado, llamo a la funcion
muestraListadoParcial(rangoLista);

// mostrarListaDeProfesionales("body-table",10,15);
// muestraListadoParcial("1-5");
// muestraListadoParcial("1-5");
// borrarLista("row-title");
// mostrarListaDeProfesionales("body-table",0,5);
// mostrarListaDeProfesionales("body-table",5,10);
// mostrarListaDeProfesionales("body-table",10,15);




