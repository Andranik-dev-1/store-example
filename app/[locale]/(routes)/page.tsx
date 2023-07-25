import getProducts from "@/actions/get-products";
import Billboard from "@/components/ui/billboard";
import CarouselWraped from "@/components/ui/carousel-wraped";
import Container from "@/components/ui/container";
import { Category } from "@/types";
import getCategories from "@/actions/get-categories";
import ProductListCarousel from "@/components/product-list-carousel";


export const revalidate = 0;

export default async function HomePage() {


  const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <CarouselWraped>
          {categories.map((category: Category) => (
            <Billboard key={category._id} data={category.billboard} />
          ))}
        </CarouselWraped>
        <ProductListCarousel title="Featured Products" items={products} />
      </div>
    </Container>
  );
}
