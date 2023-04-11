import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreatePersonaArgs } from '../../args/create/create-persona-args';

@Injectable()
export class CreatePersonaService {
  constructor(private readonly prisma: PrismaService) {}

  async run(args: CreatePersonaArgs) {
    const { author, description, imageURL, name, program } = args;
    const persona = await this.prisma.persona.create({
      data: {
        author,
        imageURL,
        name,
        desciption: description,
        program,
      },
    });
    console.log(persona);
    return persona;
  }
}
