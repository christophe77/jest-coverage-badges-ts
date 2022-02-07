#!/usr/bin/env node
import fs from 'fs';
import { Report } from './types';
import { outputPath, inputPath, reportTypes } from './constants';
import { getBadgeByKey } from './functions';

function main(){
  fs.readFile(`${inputPath}`, 'utf8', (err, res) => {
    if (err) {
      throw err;
    }
    const report: Report = JSON.parse(res);
    if (report?.total) {
      Object.keys(report['total']).map(reportKey => {
        if (reportTypes.includes(reportKey)) {
          getBadgeByKey(report.total[reportKey], reportKey, outputPath);
        }
      });
    } else {
      throw new Error('malformed coverage report');
    }
  });
}
main();

export default main

