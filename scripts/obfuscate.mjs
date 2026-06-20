// This script is not currently in use !

import * as path from 'node:path';
import fs from 'fs';

import * as util from 'util';
import { exec as rawExec } from 'child_process';
import { fstat } from 'node:fs';
const exec = util.promisify(rawExec);

const root = path.resolve(__dirname, '../');
const dist = path.resolve(root, 'dist');

async function obfuscateFiles(dir) {
    for (const file of fs.readdirSync(dir)) {
        if (fs.statSync(file).isDirectory()) {
            await obfuscateFiles(file);
            continue;
        }
        await exec(`javascript-obfuscator ${file} --output ${file} --config ${path.resolve(root, 'obfuscate.config.js')}`);
    }
}
