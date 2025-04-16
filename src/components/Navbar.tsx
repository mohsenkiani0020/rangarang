import React from "react";
import Container from "./Container";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Squares2X2Icon } from "@heroicons/react/16/solid";
import {
  CircleUserRound,
  Phone,
  PhoneIcon,
  ShoppingBagIcon,
} from "lucide-react";
import { BuildingLibraryIcon } from "@heroicons/react/24/outline";
import { GlobeAmericasIcon } from "@heroicons/react/24/outline";
import { ArrowDownOnSquareStackIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const navItems = [
    {
      title: "دسته بندی محصولات",
      icon: <Squares2X2Icon className="w-5 h-6 text-red-600" />,
    },
    {
      title: "سفارش براساس کاربرد",
      icon: <ShoppingBagIcon className="w-5 h-6 text-gray-700" />,
    },
    {
      title: "مرکز دانلود",
      icon: <ArrowDownOnSquareStackIcon className="w-5 h-6 text-gray-700" />,
    },
    {
      title: "وبلاگ",
      icon: <GlobeAmericasIcon className="w-5 h-6 text-gray-700" />,
    },
    {
      title: "فروشگاه",
      icon: <BuildingLibraryIcon className="w-5 h-6 text-gray-700" />,
    },
    {
      title: "تماس با ما",
      icon: <PhoneIcon className="w-5 h-6 text-gray-700" />,
    },
  ];
  return (
    <nav className=" ">
      <Container>
        <div className="py-6 flex justify-between  items-center gap-10 ">
          <Image src="/image/logo.webp" height={200} width={200} alt="logo" />
          <div className="w-[50%]">
            <Input type="text" placeholder="جستوجو" className="search" />
          </div>
          <div className="flex  justify-center items-center gap-2">
            <CircleUserRound className="text-red-600 w-8 h-8"/>
            <span>ورود | ثبت نام</span>
          </div>
        </div>
      </Container>
      <div className="flex justify-between items-center border-y border-gray-400 py-4 ">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              {navItems.map((item) => {
                return (
                  <div key={item.title} className="flex justify-center items-center gap-1">
                    {item.icon}
                    <a className="text-gray-600">{item.title}</a>
                  </div>
                );
              })}
            </div>
            <div className="flex  justify-center items-center gap-1">
              <span>031-3335645</span>
              <span className="rounded-full bg-red-600 p-2">
                <Phone className="w-5 h-5 text-white" />
              </span>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
}

export default Navbar;
