import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreatePersonaService } from '../services/create/create-persona.service';
import { CreatePersonaArgs } from '../args/create/create-persona-args';
import { ListPersonasService } from '../services/list/list-personas.service';
import { DeletePersonaService } from '../services/delete/delete-persona.service';
import { UpdatePersonaService } from '../services/update/update-persona.service';
import { UpdatePersonaArgs } from '../args/update/update-persona-args';
import { GetPersonaService } from '../services/get/get-persona.service';

@Controller('persona')
export class PersonaController {
  constructor(
    private readonly createPersonaService: CreatePersonaService,
    private readonly listPersonasService: ListPersonasService,
    private readonly deletePersonaService: DeletePersonaService,
    private readonly updatePersonaService: UpdatePersonaService,
    private readonly getPersonaService: GetPersonaService,
  ) {}

  @Get()
  async status() {
    return 'OK';
  }

  @Post('create')
  async createPersona(@Body() body: CreatePersonaArgs) {
    return this.createPersonaService.run(body);
  }

  @Get('list')
  async listPersonas() {
    return this.listPersonasService.run();
  }

  @Delete('delete')
  async deletePersona(@Body() body: { id: number }) {
    return this.deletePersonaService.run(body.id);
  }

  @Put('update')
  async updatePersona(@Body() body: UpdatePersonaArgs) {
    return this.updatePersonaService.run(body);
  }

  @Get('get')
  async getPersona(@Body() body: { id: number }) {
    return this.getPersonaService.run(body.id);
  }
}
