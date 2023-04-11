import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class DeletePersonaService {
  constructor(private readonly prisma: PrismaService) {}

  async run(id: number) {
    const persona = await this.prisma.persona.delete({
      where: { id },
    });
    return persona;
  }
}
