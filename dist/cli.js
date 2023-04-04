#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("./constants");
const functions_1 = require("./functions");
function main() {
    fs_1.default.readFile(`${constants_1.inputPath}`, 'utf8', (err, res) => {
        if (err) {
            throw err;
        }
        const report = JSON.parse(res);
        if (report === null || report === void 0 ? void 0 : report.total) {
            Object.keys(report['total']).map(reportKey => {
                if (constants_1.reportTypes.includes(reportKey)) {
                    (0, functions_1.getBadgeByKey)(report.total[reportKey], reportKey, constants_1.outputPath);
                }
            });
        }
        else {
            throw new Error('malformed coverage report');
        }
    });
}
main();
exports.default = main;
