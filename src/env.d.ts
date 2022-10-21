declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      DB_HOST?: string;
      DB_PORT?: number;
      DB_USER?: string;
      DB_PASSWORD?: string;
      DB_DATABASE?: string;
      NODE_ENV?: 'production' | 'development' | 'test';
    }
  }
}

export {};
