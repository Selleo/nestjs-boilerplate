import { AppModule } from '@app/app.module';
import { Test } from '@nestjs/testing';

export async function createTestingModule() {
  const testingModule = Test.createTestingModule({
    imports: [AppModule],
  });

  const moduleFixture = await testingModule.compile();

  const app = moduleFixture.createNestApplication();
  await app.init();

  return app;
}
