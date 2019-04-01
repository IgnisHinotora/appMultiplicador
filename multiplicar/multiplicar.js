//Se declara una constante que trae una librería nativa de NODE
const fs = require('fs');

/*Se crea funcion que multiplica, ésta función será usada en la aplicación
Será referenciada en la aplicación*/



let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un número`);
        } else {
            if (!Number(limite)) {
                reject(`${limite} no es un número`);
            }

        }
        for (let i = 1; i < limite + 1; i++) {

            console.log(`${base} * ${i} = ${base*i}`)

        }
        resolve('Tabla impresa con éxito!')
    })


}

let crearArchivo = (base, limite) => {



    /*al definir una promesa se definen como parametros de entrada un 
    'resolve' y un 'reject' */
    return new Promise((resolve, reject) => {

        if (!Number(base)) { //equivalente al int.tryparse para ver si es un número
            reject(`El valor ${base} no es un número`)
        } else {
            if (!Number(limite)) {
                reject(`${limite} no es un número`);
            }
        }

        let data = ''; // data acumula las iteraciones de las lineas de multiplicaciones
        for (let i = 1; i < limite + 1; i++) {

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
    crearArchivo,
    listarTabla
}