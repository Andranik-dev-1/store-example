import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import getBillboards from "@/actions/get-billboards";
import Billboard from "@/components/ui/billboard";
import CarouselWraped from "@/components/ui/carousel-wraped";
import Container from "@/components/ui/container";
import { Billboard as BillboardType } from "@/types";


export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });

  const billboards = await getBillboards();

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <CarouselWraped>
          {billboards.map((billboard: BillboardType) => (
            <Billboard data={billboard} />
          ))}
        </CarouselWraped>
        
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
