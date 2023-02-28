import  {join, dirname} from 'node:path';
import { fileURLToPath } from 'node:url';
import { Low } from 'lowdb';
import {JSONFile} from 'lowdb/node'
import * as url from 'url';

//Opening the db for every request, nice

//const __dirname=dirname(fileURLToPath(import.meta.url));
console.log("a punto de correr el URL")
//const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const __dirname = "./services/";

console.log("ya corri el URL");

const file=join(__dirname, 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

await db.read();

db.data ||= { scores: []};

//TO-DO: blocking operation
export default function writeScore(data) {
    db.data.scores.push(data);
    db.write()
}