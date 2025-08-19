export interface Users {
  username: string;
  password: string;
  roles: Role[];
}
export interface Role {
  name: string;
}
