"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const fs = require("fs");
async function bootstrap() {
    console.log(__dirname + `/cert/www_jih-service_com_key.pem`);
    const httpsOptions = {
        key: fs.readFileSync(__dirname + `/cert/www_jih-service_com.key`),
        cert: fs.readFileSync(__dirname + `/cert/www_jih-service_com.crt`),
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        httpsOptions,
    });
    app.enableCors();
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Jump in Help')
        .setDescription('Docs for Jump in help')
        .setVersion('0.1')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(4050);
}
bootstrap();
//# sourceMappingURL=main.js.map