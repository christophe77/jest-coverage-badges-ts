"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputPath = exports.outputPath = exports.reportTypes = void 0;
const functions_1 = require("./functions");
exports.reportTypes = ['lines', 'statements', 'functions', 'branches'];
exports.outputPath = (0, functions_1.findArgument)('output', './coverage');
exports.inputPath = (0, functions_1.findArgument)('input', './coverage/coverage-summary.json');
