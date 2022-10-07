import { JestConfigWithTsJest } from 'ts-jest';
import baseConfig from './jest.config';

const config: JestConfigWithTsJest = {
  ...baseConfig,
  testRegex: '.*\\.e2e-spec\\.ts$',
};

export default config;
