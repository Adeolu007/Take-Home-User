import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config/config';



// @Module({
//   imports: [
//     JwtModule.register({global: true, secret: '123'}),

//     MongooseModule.forRoot('mongodb+srv://odunuyiadeolu:Treasurer15@nestjstest.4xvpc.mongodb.net/?retryWrites=true&w=majority&appName=nestjsTest'),
//     //MongooseModule.forRootAsync('mongodb+srv://odunuyiadeolu:Treasurer15@nestjstest.4xvpc.mongodb.net/?retryWrites=true&w=majority&appName=nestjsTest'),
 
//     AuthModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [config],
    }),


    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config)=>({
        secret: config.get('jwt.secret')
      }),
      global: true, 
      inject: [ConfigService],
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config)=>({
        uri: config.get('database.connectionString'),
      }),
      inject: [ConfigService],
    }),
    //MongooseModule.forRootAsync('mongodb+srv://odunuyiadeolu:Treasurer15@nestjstest.4xvpc.mongodb.net/?retryWrites=true&w=majority&appName=nestjsTest'),
 
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}