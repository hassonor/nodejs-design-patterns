"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var mock_read_file_1 = require("./mock-read-file");
(0, mock_read_file_1.mockEnable)(Buffer.from('Hello world'));
(0, fs_1.readFile)('fake-path', function (err, data) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(data.toString());
});
(0, mock_read_file_1.mockDisable)();
