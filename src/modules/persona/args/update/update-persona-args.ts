export interface UpdatePersonaArgs {
  where: { id: number };
  data: {
    name?: string;
    description?: string;
    imageURL?: string;
    program?: string;
    author?: string;
  };
}
