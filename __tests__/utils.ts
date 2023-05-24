import fs from 'fs/promises';
import { promisify } from 'util';
import { exec } from 'child_process';

const execute = promisify(exec);

const TEST_COVERAGE = 'npm run test:coverage';
const COVERAGE_SUMMARY = 'coverage/coverage-summary.json';

type CoverageResult = { total: { branches: { pct: number }, lines: { pct: number }}};

/**
 * Run a shell command, and return the output, even if it fails
 * @param {Object} params parameters for the command
 * @param {string} params.command shell command to run
 * @param {string[]} [params.args] additional args
 * @returns {Promise<string>} stdout + stderr from the command
 */
export const runCommand = async ({ command, args = [] }: { command: string; args?: string[]; }): Promise<string> => {
  const commandWithArgs = `${command} ${args.join(' ')}`;
  const { stdout, stderr } = await execute(args.length ? commandWithArgs : command)
    .catch((error) => error);
  if (process.env.DEBUG) console.log({ command, stderr, stdout });
  return stdout + stderr;
};

export const cacheWrapper = <T>(callback: () => Promise<T>) => {
  let cachedResults: T;
  const getCallbackResults = async () => {
    if (cachedResults === undefined) {
      cachedResults = await callback();
    }
    return cachedResults;
  };
  return getCallbackResults;
};

export const runMochaCoverage = cacheWrapper<CoverageResult>(async () => {
  const response = await runCommand({ command: TEST_COVERAGE });
  if (response.includes('AssertionError')) {
    throw new Error('Seus testes estão falhando!');
  }
  const coverageSummary = await fs.readFile(COVERAGE_SUMMARY, 'utf-8');
  return JSON.parse(coverageSummary);
});
