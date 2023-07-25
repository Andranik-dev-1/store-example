import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";
import NoResults from "@/components/ui/no-result";
import CarouselWraped from "./ui/carousel-wraped";
import {useTranslations} from 'next-intl';

interface ProductListCarouselProps {
  title: string;
  items: Product[];
}

const ProductListCarousel: React.FC<ProductListCarouselProps> = ({
  title,
  items,
}) => {

    const t = useTranslations('Index');


  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      <h1>{t('title')}</h1>
      {items.length === 0 && <NoResults />}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
      <CarouselWraped slidesToShow={4}>
        {items.map((item) => (
          <div className="px-2" key={item._id} >
            <ProductCard data={item} />
          </div>
        ))}
      </CarouselWraped>
      {/* </div> */}
    </div>
  );
};

export default ProductListCarousel;
