"use client"

import ProductList from "@/components/product-list";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import useLikedStore from "@/hooks/use-liked";
import { useRouter } from "next-intl/client";
import { useEffect, useState } from "react";

const LikedPage = () => {
  const likedItems = useLikedStore((state) => state.items);
  const router = useRouter();

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted){
    return null
  }
  
  return (
    <div className="bg-white">
      <div className="h-full px-4 py-16 sm:px-6 lg:px-8">
        <Container>
          {!!likedItems.length && (
            <ProductList title="Liked Items" items={likedItems} />
          )}
        </Container>
      </div>
      {!likedItems.length && (
        <div className="h-full flex flex-col justify-center items-center">
          <p className="mb-3">Do you want to add product to prefferred ?</p>
          <Button
            className="px-4 py-2 my-2 bg-black text-white"
            onClick={() => router.push("/")}
          >
            Go to choose something!
          </Button>
        </div>
      )}
    </div>
  );
};

export default LikedPage;

