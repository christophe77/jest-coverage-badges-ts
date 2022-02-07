import 'jest';
import { findArgument, getColour, getBadge } from '../src/functions';

describe('cli', () => {
  it('should return a string', async () => {
    const result = findArgument('thisIsAnArg', 'thisIsTheDefaultOutput');
    expect(typeof result).toBe('string');
  });
  it('should return a string red', async () => {
    const result = getColour(75);
    expect(result).toContain('red');
  });
  it('should return a string yellow', async () => {
    const result = getColour(85);
    expect(result).toContain('yellow');
  });
  it('should return a string brightgreen', async () => {
    const result = getColour(10000000);
    expect(result).toContain('brightgreen');
  });
  it('should return an url', async () => {
    const reportDetail = {
      total: 100,
      covered: 50,
      skipped: 0,
      pct: 50,
    };
    const result = getBadge(reportDetail, 'branches');
    expect(result).toContain('https://');
  });
});
