export interface Order {
  orderId: number;
  userId: number;
  articleId: number;
  quantity: number;
  totalPrice: number;
}

export interface Article {
 
  articleId?: number;
  artName: string;
  description: string;
  price: number;
  museumId: number;
  image: string;
  quantity: number;
  remainingStock: number;
}
