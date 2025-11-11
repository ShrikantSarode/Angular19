export interface Articles {
  id: number;
  artName: string;
  description: string;
  image: string;
  price: number;
  museumId?: number;
  remainingStock: number;  
  quantity: number;  
}
