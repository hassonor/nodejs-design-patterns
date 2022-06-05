import {readFile} from "fs";

const originalReadFile = readFile;
let mockedResponse = null;

function mockedReadFile(path,cb){
    setImmediate(()=>{
        cb(null,mockedResponse);
    })
}

export function mockEnable(respondWith){
    mockedResponse = respondWith;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    readFile = mockedReadFile
}

export function mockDisable(){
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    readFile = originalReadFile
}