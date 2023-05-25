import fs from 'fs/promises';
import { promisify } from 'util';
import { exec } from 'child_process';

const execute = promisify(exec);

const TEST_COVERAGE = 'npm run test:coverage';
const COVERAGE_SUMMARY = 'coverage/coverage-summary.json';

type CoverageResult = { total: { statements: { pct: number }, lines: { pct: number }}};

/**
 * Run a shell command, and return the output, even if it fails
 * @param {Object} params parameters for the command
 * @param {string} params.command shell command to run
 * @param {string[]} [params.args] additional args
 * @returns {Promise<string>} stdout + stderr from the command
 */
export const runCommand = async ({ command, args = [] }: { command: string; args?: string[]; }): Promise<{ stdout: string, stderr: string, status: number }> => {
  const commandWithArgs = `${command} ${args.join(' ')}`;
  const { stdout, stderr, status } = await execute(args.length ? commandWithArgs : command)
    .then((result) => ({ ...result, status: 0 }))
    .catch((error) => ({ ...error, status: 1 }));
  if (process.env.DEBUG) console.log({ command, stderr, stdout });
  return { stdout, stderr, status };
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
  const { status } = await runCommand({ command: TEST_COVERAGE });
  if (status != 0) {
    throw new Error('Seus testes estão falhando!');
  }
  const coverageSummary = await fs.readFile(COVERAGE_SUMMARY, 'utf-8');
  return JSON.parse(coverageSummary);
});
