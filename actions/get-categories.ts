import { client } from "@/lib/sanity/client";
import { Category } from "@/types";

const getCategories = async (): Promise<Category[]> => {
  try {
    return await client.fetch(`*[_type == "category"]{
        _id,
        name,
        billboard->{   
          _id,
          label,
          'imageUrl': imageUrl.asset->url
        }
      }
    `);
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
export default getCategories;
