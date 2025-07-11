export interface signUp {
  name: string;
  email: string;
  password: string;
}

export interface login {
  email: string;
  password: string;
}

export interface product {
  id: number;
  name: string;
  price: number;
  category: string;
  color: string;
  image: string;
  description: string;
}
