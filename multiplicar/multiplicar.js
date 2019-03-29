//Se declara una constante que trae una librería nativa de NODE
const fs = require('fs');

/*Se crea funcion que multiplica, ésta función será usada en la aplicación
Será referenciada en la aplicación*/



let listarTabla = (tabla, limite = 10) => {



}

let crearArchivo = (base) => {


    /*al definir una promesa se definen como parametros de entrada un 
    'resolve' y un 'reject' */
    return new Promise((resolve, reject) => {

        if (!Number(base)) { //equivalente al int.tryparse para ver si es un número
            reject(`El valor ${base} no es un número`)
        }

        let data = ''; // data acumula las iteraciones de las lineas de multiplicaciones
        for (let i = 1; i < 11; i++) {

            data += `${base} X ${i} =  ${base * i}\n`;

        }

        /*Ésta función nativa de node crea un archivo de texto.
        En éste caso está creando el archivo para las tablas y pegando 
        el resultado */
        //fs.writeFile(file, data[, options], callback)
        fs.writeFile(`tablas/tablaX ${base}.txt`, `${data}`, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`tablaX${base}.txt`);
            }
        })
    })
}


//se exporta esta función para ser usada en app
module.exports = {
    crearArchivo
}