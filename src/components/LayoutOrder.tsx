import { ChildrenPropsModel } from "@/models/childrenPropsModel";
import React from "react";
import ProductGallerySidebar from "./ProductGallerySidebar";
import ProductDetailsSidebar from "./ProductDetailsSidebar";
import ProductMainContent from "./ProductMainContent";

function LayoutOrder({ children }: ChildrenPropsModel) {
  return (
    <div className="grid grid-cols-12 gap-5 mt-8">
      <ProductGallerySidebar />
      <ProductMainContent>{children}</ProductMainContent>
      <ProductDetailsSidebar />
    </div>
  );
}

export default LayoutOrder;
