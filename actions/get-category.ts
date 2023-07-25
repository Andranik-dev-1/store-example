import { client } from "@/lib/sanity/client";
import { Category } from "@/types";

const getCategory = async (categoryId: string): Promise<Category> => {
  try {
    const categories = await client.fetch(
      `*[_type == "category" && _id == $categoryId]{
      _id,
      name,
      billboard->{   
        _id,
        label,
        'imageUrl': imageUrl.asset->url
      }
    }
    `,
      { categoryId }
    );
    return categories[0]
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
export default getCategory;
