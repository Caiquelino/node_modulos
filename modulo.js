const os = require('os');

const tipo = os.type();
const plataforma = os.platform();
const memoria_livre = os.totalmem();
const converterBytetoMB = require('./util/conversor').converterBytetoMB(memoria_livre);


console.log(`Plataforma: ${plataforma}`);
console.log(`Tipo: ${tipo}`);
console.log(`Tipo: ${os.release()}`);
console.log(`Tipo: ${memoria_livre} bytes`);
console.log(`Tipo: ${converterBytetoMB} bytes`);
