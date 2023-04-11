import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { UpdatePersonaArgs } from '../../args/update/update-persona-args';

@Injectable()
export class UpdatePersonaService {
  constructor(private readonly prisma: PrismaService) {}

  async run(args: UpdatePersonaArgs) {
    const { author, description, imageURL, name, program } = args.data;
    const persona = await this.prisma.persona.update({
      where: args.where,
      data: {
        author,
        imageURL,
        name,
        desciption: description,
        program,
      },
    });
    return persona;
  }
}
