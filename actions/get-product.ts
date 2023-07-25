import { Product } from "@/types";
import { client } from "@/lib/sanity/client";

const getProduct = async (productId: string): Promise<Product> => {
  const products = await client.fetch(
    `*[_type == "product" && _id == $productId]{
    _id,
    name,
    price,
    "images": images[].asset->url,
    category->{   
      _id,
      name,
    },
    size->{
      name,
      value
    },
    color->{
      name,
      value
    },
    isFeatured
  }
`,
    { productId }
  );

  return products[0]
};

export default getProduct;
