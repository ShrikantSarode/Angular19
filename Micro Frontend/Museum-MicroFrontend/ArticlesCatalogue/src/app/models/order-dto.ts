export interface OrderDto {
  // articleList: any[];

  userId: number;
  articleList: {
    id: number;
    image:string;
    name: string;
    price: number;
    quantity: number;
  }[];
}
