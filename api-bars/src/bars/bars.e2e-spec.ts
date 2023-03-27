import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { BarsModule } from "./bars.module";
import { BarsService } from "./bars.service";

describe("BarsControllerController (e2e)", () => {
  let app: INestApplication;
  const barsService = { findAll: () => ["test"] };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [BarsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [BarsModule],
    })
      .overrideProvider(BarsService)
      .useValue(barsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET bars`, () => {
    return request(app.getHttpServer()).get("/api/bars").expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
