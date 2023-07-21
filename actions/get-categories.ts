import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
export default getCategories;
