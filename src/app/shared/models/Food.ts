export class Food {
  id!: number;
  name!: string;
  price!: number;
  tags?: String[];
  favorite: boolean = false;
  stars: number = 0;
  imageUrl!: string;
  origins!: String[]
  cookTime!: string;

}
