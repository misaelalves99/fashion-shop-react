// src/api/categories.ts
import { Category } from '../types/category';

export async function getCategories(): Promise<Category[]> {
  return [
    { id: 'bermuda', title: 'Bermuda' },
    { id: 'biquini', title: 'Biquini' },
    { id: 'calca', title: 'Calça' },
    { id: 'camiseta', title: 'Camiseta' },
    { id: 'jaqueta', title: 'Jaqueta' },
    { id: 'saia', title: 'Saia' },
    { id: 'sapato', title: 'Sapato' },
    { id: 'vestido', title: 'Vestido' },
  ];
}
