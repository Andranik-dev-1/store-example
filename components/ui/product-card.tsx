"use client";

import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";
import { Expand, Heart, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import {FaHeart} from 'react-icons/fa'

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import useCarousel from "@/hooks/use-carousel";
import useLikedStore from "@/hooks/use-liked";
import Skeleton from "./skeleton";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const [mounted, setMounted] = useState(false)
  const previewModal = usePreviewModal();
  const addItem = useCart(state => state.addItem);
  const toggleLikedItem = useLikedStore((state) => state.toggleItem)
  const LikedItems = useLikedStore((state) => state.items)
  const router = useRouter();
  const isSwiping = useCarousel((state) => state.isSwiping);


  const existingItem = LikedItems.find((item) => item._id === data._id);
  let heartIcon 
  if(existingItem) {
    heartIcon = <FaHeart className="text-xl text-red-600"/>
  } else {
    heartIcon = <Heart size={20} className="text-gray-600" />
  }

  const handleClick = () => {
    if (!isSwiping) {
      router.push(`/product/${data?._id}`);
    }
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    addItem(data);
  };

  const onAddToLiked: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    toggleLikedItem(data)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted){
    return <Skeleton/>
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
  
        <Image
          src={data.images?.[0]}
          alt="image"
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToLiked}
              icon={heartIcon}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
