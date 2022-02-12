import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import "dotenv/config";
import { INestApplication, ValidationPipe } from "@nestjs/common";

function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle("Umpha docs")
    .setDescription("The Umpha API description")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // validation을 위한 decorator가 붙어있지 않은 속성들은 제거
      forbidNonWhitelisted: true, // whitelist 설정을 켜서 걸러질 속성이 있다면 아예 요청 자체를 막도록 (400 에러)
      transform: true, // 요청에서 넘어온 자료들의 형변환
    })
  );
  setupSwagger(app);

  await app.listen(process.env.PORT);
}
bootstrap();
