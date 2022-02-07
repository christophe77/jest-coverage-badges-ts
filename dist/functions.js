"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBadgeByKey = exports.getBadge = exports.getColour = exports.findArgument = void 0;
const fs_1 = __importDefault(require("fs"));
const https_1 = require("https");
function findArgument(argName, defaultOutput) {
    if (!argName) {
        return defaultOutput;
    }
    const index = process.argv.findIndex(a => a.match(argName));
    if (index < 0) {
        return defaultOutput;
    }
    try {
        return process.argv[index + 1];
    }
    catch (e) {
        return defaultOutput;
    }
}
exports.findArgument = findArgument;
function getColour(coverage) {
    if (coverage < 80) {
        return 'red';
    }
    if (coverage < 90) {
        return 'yellow';
    }
    return 'brightgreen';
}
exports.getColour = getColour;
function getBadge(reportType, reportName) {
    const coverage = !reportType || typeof reportType.pct !== 'number' ? 0 : reportType.pct;
    const colour = getColour(coverage);
    return `https://img.shields.io/badge/Coverage${encodeURI(':')}${reportName}-${coverage}${encodeURI('%')}-${colour}.svg`;
}
exports.getBadge = getBadge;
function getBadgeByKey(reportType, reportName, outputPath) {
    const url = getBadge(reportType, reportName);
    let file = '';
    (0, https_1.get)(url, res => {
        res.on('data', (chunk) => {
            file += chunk;
        });
        res.on('end', () => {
            fs_1.default.writeFileSync(`${outputPath}/badge-${reportName}.svg`, file, {
                encoding: 'utf8',
                flag: 'w',
            });
        });
    }).on('error', (err) => {
        throw err;
    });
}
exports.getBadgeByKey = getBadgeByKey;
