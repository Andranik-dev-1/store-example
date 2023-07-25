import { Billboard } from "@/types";
import { client } from "@/lib/sanity/client";

const getBillboards = async (): Promise<Billboard[]> => {

  return await client.fetch(`*[_type == "billboard"]{
    _id,
    label,
    'imageUrl': imageUrl.asset->url
  }
`);
};

export default getBillboards;

