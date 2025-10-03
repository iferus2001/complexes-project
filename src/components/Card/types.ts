export type Tag = string;

export type ComplexType = "Бізнес" | "Comfort" | "Premium" | "Elite";

export type Complex = {
  id: number;
  img: string;
  year: number;
  type: ComplexType;
  name: string;
  adress: string;
  tags: Tag[];
};

export type Complexes = Complex[];
