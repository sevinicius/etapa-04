import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class GetPersonaService {
  constructor(private readonly prisma: PrismaService) {}

  async run(id: number) {
    const persona = await this.prisma.persona.findUnique({
      where: { id },
    });
    return persona;
  }
}
