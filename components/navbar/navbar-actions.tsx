"use client";

import { Heart, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Dropdown } from "antd";
import { Globe } from "lucide-react";
import type { MenuProps } from "antd";
import { usePathname, useRouter } from "next-intl/client";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const pathname = usePathname();
  const cart = useCart();

  const switchLang = (lang: string) => {
    router.replace(pathname, { locale: lang });
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className="px-1 my-1 flex justify-center"
          onClick={() => switchLang("am")}
        >
          <Image src={`/images/am.svg`} width="20" height="15" alt="am" />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className="px-1 my-1 flex justify-center"
          onClick={() => switchLang("ru")}
        >
          <Image src={`/images/ru.svg`} width="20" height="15" alt="ru" />
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          className="px-1 my-1 flex justify-center"
          onClick={() => switchLang("en")}
        >
          <Image src={`/images/en.svg`} width="20" height="15" alt="en" />
        </div>
      ),
    },
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-2">
      <Button 
        className="flex items-center rounded-full bg-transparent text-neutral-500 hover:text-black px-2 py-1"
        onClick={() => router.push('/liked')}
      >
          <Heart size={25} />
      </Button>

      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>

      <Dropdown menu={{ items }} placement="bottom">
        <Button className="flex items-center rounded-full bg-transparent text-neutral-500 hover:text-black px-2 py-1">
          <Globe size={25} />
        </Button>
      </Dropdown>
    </div>
  );
};

export default NavbarActions;
