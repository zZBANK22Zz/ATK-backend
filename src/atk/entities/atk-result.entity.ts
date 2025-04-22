export class AtkResult {
  id: number;
  userId: number;
  result: 'positive' | 'negative';
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
} 