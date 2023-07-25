import { Size } from "@/types";
import { client } from "@/lib/sanity/client";

const getSizes = async (): Promise<Size[]> => {
  return await client.fetch(`*[_type == "size"]{
    _id,
    name,
    value
  }
`);
};

export default getSizes;
