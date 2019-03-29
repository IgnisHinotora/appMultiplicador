const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        },


    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');


let comando = argv._[0];


switch (comando) {
    case 'listar':
        console.log('Listar')
        break;

    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('No se reconoce el comando');
        break;
}
//let base = 'l';

//console.log(process.argv);

/**
 * Se declara una variable para trabajar más facilmente con argumentos.
 * Luego se declara un parámetro para capturar solamente el parametro ingresado
 * por consola.
 * Se envía ese valor a la variable 'base' para ser usado en la función
 */


let argv2 = process.argv;

console.log('Limite', argv.limite);
//console.log(argv2);
/*let parametro = argv[2];
let base = parametro.split('=')[1];*/
/*console.log(`Parámetro capturado: ${base} para crear tabla`);
 */