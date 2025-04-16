import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { CarIcon, MailOpen } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  PencilSquareIcon,
  Square2StackIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/16/solid";

function ProductDetailsSidebar() {
  return (
    <div className="col-span-3 flex flex-col justify-center gap-5">
      <div className="bg-red-500/90 rounded-2xl p-6 flex flex-col gap-5">
        <div className="flex justify-between items-center  text-white">
          <div className="flex items-center gap-1">
            <CurrencyDollarIcon className="text-whit w-6 h-6" />
            <span>قیمت :</span>
          </div>
          <span>
            <span className="font-bold">0</span>
            <span> ریال</span>
          </span>
        </div>
        <div className="flex justify-between items-center text-white  border-b-1 pb-6 border-gray-200">
          <div className="flex items-center gap-1">
            <CarIcon className="text-whit w-6 h-6" />
            <span>زمان تحویل :</span>
          </div>
          <span>
            <span className="font-bold">2</span>
            <span> روزکاری</span>
          </span>
        </div>
        <Button className="bg-white text-black w-full hover:text-white">
          تایید و ادامه
        </Button>

        <span className="text-white flex items-center justify-center gap-1">
          <Square2StackIcon className="w-6 h-6" />
          <span>راهنمای سفارش</span>
        </span>
      </div>
      <Button variant="outline" className="text-red-600 py-6">
        <PencilSquareIcon className="w-6 h-6"/> سفارش طراحی آنلاین
      </Button>
    </div>
  );
}

export default ProductDetailsSidebar;
