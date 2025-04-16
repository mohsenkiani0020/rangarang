import * as React from "react";
import CarouselComponent from "./CarouselComponent";
import { Progress } from "@/components/ui/progress";
import { Squares2X2Icon } from "@heroicons/react/16/solid";

function ProductGallerySidebar() {
  return (
    <div className="col-span-4 text-center flex  items-center gap-6 flex-col">
      <CarouselComponent />
      <div className="shadow-sm w-full p-3 rounded-md">
        <div className=" flex justify-between items-center gap-10 ">
          <div className="flex justify-between items-center gap-4">
            <span className="text-xs text-nowrap font-bold">تعداد نظرات</span>
            <div className="flex justify-between items-center gap-1">
              <span className="bg-green-500 p-1 rounded-full text-xs text-white">
                13
              </span>
              <span className="text-xs">نظر</span>
            </div>
          </div>
          <div className="flex justify-between items-center  w-full gap-4">
            <span className="text-xs text-nowrap font-bold">کیفیت محصول</span>
            <Progress value={75} />
          </div>
        </div>
        <div className="flex gap-4 items-center mt-4">
          <div className="flex justify-between items-center  w-1/2 gap-4">
            <span className="text-xs text-nowrap font-bold">امتیاز</span>
            <Progress value={85} />
          </div>
          <div className="flex justify-between items-center  w-1/2 gap-4">
            <span className="text-xs text-nowrap font-bold">مقرون به صرفه</span>
            <Progress value={35} />
          </div>
        </div>
      </div>
      <div className="shadow-sm w-full p-3 rounded-md">
        <div className="flex justify-start items-center gap-2 border-b-2 pb-4">
          <Squares2X2Icon className="w-5 h-6 text-red-600" />
          <span>برچسب ها</span>
        </div>
        <span className="text-gray-500 text-start block mt-3">#کاغذ</span>
      </div>
    </div>
  );
}

export default ProductGallerySidebar;
