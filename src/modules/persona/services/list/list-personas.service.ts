import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class ListPersonasService {
  constructor(private readonly prisma: PrismaService) {}

  async run() {
    const personas = await this.prisma.persona.findMany();
    return personas;
  }
}
