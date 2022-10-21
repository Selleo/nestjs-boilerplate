import { JestConfigWithTsJest } from 'ts-jest';

import baseConfig from './jest.config';

const config: JestConfigWithTsJest = {
  ...baseConfig,
  testRegex: '.*\\.e2e-spec\\.ts$',
  setupFilesAfterEnv: ['./jest-e2e.setup.ts'],
};

export default config;
