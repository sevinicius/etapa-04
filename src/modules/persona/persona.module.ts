import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CreatePersonaService } from './services/create/create-persona.service';
import { PersonaController } from './controllers/persona.controller';
import { ListPersonasService } from './services/list/list-personas.service';
import { DeletePersonaService } from './services/delete/delete-persona.service';
import { UpdatePersonaService } from './services/update/update-persona.service';
import { GetPersonaService } from './services/get/get-persona.service';

const providers = [
  CreatePersonaService,
  ListPersonasService,
  DeletePersonaService,
  UpdatePersonaService,
  GetPersonaService,
];

@Module({
  imports: [PrismaModule],
  controllers: [PersonaController],
  providers,
  exports: [...providers],
})
export class PersonaModule {}
