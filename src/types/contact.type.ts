export type CreateContact = {
  name: string;
  number: string;
};

export type Contact = CreateContact & {
  id: string;
};
