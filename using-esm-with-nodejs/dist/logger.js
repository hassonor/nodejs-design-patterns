"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LEVELS = exports.DEFAULT_LEVEL = exports.log = void 0;
function log(message) {
    console.log(message);
}
exports.log = log;
exports.DEFAULT_LEVEL = 'info';
var LEVELS;
(function (LEVELS) {
    LEVELS[LEVELS["Error"] = 0] = "Error";
    LEVELS[LEVELS["Debug"] = 1] = "Debug";
    LEVELS[LEVELS["Warn"] = 2] = "Warn";
    LEVELS[LEVELS["Data"] = 3] = "Data";
    LEVELS[LEVELS["Info"] = 4] = "Info";
    LEVELS[LEVELS["Verbose"] = 5] = "Verbose";
})(LEVELS = exports.LEVELS || (exports.LEVELS = {}));
class Logger {
    constructor(name) {
        this.name = name;
    }
    log(message) {
        console.log(`[${this.name}] ${message}`);
    }
}
exports.default = Logger;
//# sourceMappingURL=logger.js.map