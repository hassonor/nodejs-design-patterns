"use strict";
exports.__esModule = true;
exports.mockDisable = exports.mockEnable = void 0;
var fs_1 = require("fs");
var originalReadFile = fs_1.readFile;
var mockedResponse = null;
function mockedReadFile(path, cb) {
    setImmediate(function () {
        cb(null, mockedResponse);
    });
}
function mockEnable(respondWith) {
    mockedResponse = respondWith;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    fs_1.readFile = mockedReadFile;
}
exports.mockEnable = mockEnable;
function mockDisable() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    fs_1.readFile = originalReadFile;
}
exports.mockDisable = mockDisable;
