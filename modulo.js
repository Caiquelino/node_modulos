import os from 'os';

const log = console.log;
const tipo = os.type();
const plataforma = os.platform();
const memoria_livre = os.totalmem();
import { converterBytesParaMB } from './util/conversor.js';
import chalk from 'chalk';

console.log(chalk.blue.bold(`=== Informações do Sistema ===\n`));

console.log(`Plataforma: ${plataforma}`);
console.log(`Windows: ${tipo}`);
console.log(`Versão: ${os.release()}`);
console.log(`Memória: ${memoria_livre} bytes`);
console.log(`Memória: ${converterBytesParaMB(memoria_livre)} MB`);
log(`
    CPU:${chalk.red('90%')}
    RAM:${chalk.green('40%')}
    DISK:${chalk.yellow('70%')}`
);