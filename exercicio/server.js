import fs from 'fs';
import path from 'path';

const pasta = "C:/Users/caiquelino6183/Documents/GIT/node_modulos";

const arquivos = fs.readdirSync(pasta);
console.log(arquivos);
