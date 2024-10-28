export type Productype = {
  id: number;
  ProductName: string;
  slug: string;
  description: string;
  activ: boolean;
  isFeature: boolean;
  taste: string;
  origin: string;
  price: number;
  images: { id: number; url: string }[];

  category: {
    data: {
      attributes: {
        slug: string;
        categoryName: string;
      };
    };
  };
};
