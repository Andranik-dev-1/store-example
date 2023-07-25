import { Color } from "@/types";
import { client } from "@/lib/sanity/client";

const getColors = async (): Promise<Color[]> => {
  return await client.fetch(`*[_type == "color"]{
    _id,
    name,
    value
  }
`);
};

export default getColors;
