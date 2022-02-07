import { findArgument } from './functions';
export const reportTypes = ['lines', 'statements', 'functions', 'branches'];
export const outputPath = findArgument('output', './coverage');
export const inputPath = findArgument(
  'input',
  './coverage/coverage-summary.json',
);
