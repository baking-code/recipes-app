interface Tag {
  id: number;
  text: string;
}

interface Recipe {
  name: string;
  description?: string;
  tags?: Tag[];
  id: string;
}
