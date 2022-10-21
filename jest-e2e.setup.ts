import { getApplication } from '@test/utils/getApplication';
import { DataSource } from 'typeorm';

beforeEach(async () => {
  const app = await getApplication();

  const database = app.get(DataSource);

  await database.createQueryRunner().clearDatabase();

  await database.runMigrations({ transaction: 'all' });
});

afterAll(async () => {
  const app = await getApplication();
  const database = app.get(DataSource);

  await database.destroy();
  await app.close();
});
