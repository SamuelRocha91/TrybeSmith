export type User = {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
};

export type NewUser = User | undefined;
