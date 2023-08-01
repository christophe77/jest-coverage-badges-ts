import fs from 'fs';
import { get } from 'https';
import { IncomingMessage } from 'http';
import path from 'path';
import { ReportDetails } from './types';

export function findArgument(argName: string, defaultOutput: string) {
  if (!argName) {
    return defaultOutput;
  }
  const index = process.argv.findIndex(a => a.match(argName));
  if (index < 0) {
    return defaultOutput;
  }

  try {
    return process.argv[index + 1];
  } catch (e) {
    return defaultOutput;
  }
}

export function getColour(coverage: number): string {
  if (coverage < 80) {
    return 'red';
  }
  if (coverage < 90) {
    return 'yellow';
  }
  return 'brightgreen';
}

export function getBadge(reportType: ReportDetails, reportName: string) {
  const coverage =
    !reportType || typeof reportType.pct !== 'number' ? 0 : reportType.pct;
  const colour = getColour(coverage);

  return `https://img.shields.io/badge/Coverage${encodeURI(
    ':',
  )}${reportName}-${coverage}${encodeURI('%')}-${colour}.svg`;
}

export function getBadgeByKey(
  reportType: ReportDetails,
  reportName: string,
  outputPath: string,
) {
  const url = getBadge(reportType, reportName);
  let file = '';
  get(url, (res:IncomingMessage) => {
    res.on('data', (chunk:any): void => {
      file += chunk;
    });
    res.on('end', (): void => {
      if (!fs.existsSync(outputPath)){
        fs.mkdirSync(outputPath, { recursive: true });
      }
      fs.writeFileSync(path.join(outputPath, `badge-${reportName}.svg`), file, {
        encoding: 'utf8',
        flag: 'w',
      });
    });
  }).on('error', (err:any): void => {
    throw err;
  });
}
