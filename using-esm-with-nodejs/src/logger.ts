
export function log(message: string){
    console.log(`${message}`);
}

export function info(message: string){
    log(`info: ${message}`);
}

export const DEFAULT_LEVEL = 'info';

export enum LEVELS {
    Error,
    Debug,
    Warn,
    Data,
    Info,
    Verbose
}

export default class Logger{
    readonly name: string

    constructor(name: string) {
        this.name = name;
    }
    log(message: string){
        console.log(`[${this.name}] ${message}`)
    }
}