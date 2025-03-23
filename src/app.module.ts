import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemons/pokemons.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URL ||
        'mongodb+srv://admin:admin123@fullstack.tbecp.mongodb.net/pokemons?retryWrites=true&w=majority&appName=fullstack',
      {},
    ),
    PokemonModule,
  ],
})
export class AppModule {}
