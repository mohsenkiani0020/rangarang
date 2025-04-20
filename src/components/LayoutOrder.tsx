import ProductGallerySidebar from "./ProductGallerySidebar";
import ProductDetailsSidebar from "./ProductDetailsSidebar";
import ProductMainContent from "./ProductMainContent";

import { layoutOrderPropsModel } from "@/models/layoutOrderPropsModel";
import ProductTabs from "./ProductTabs";

function LayoutOrder({ children, data }: layoutOrderPropsModel) {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 mt-8">
        <ProductGallerySidebar />
        <ProductMainContent>{children}</ProductMainContent>
        <ProductDetailsSidebar data={data} />
      </div>
      <ProductTabs data={data} />
    </>
  );
}

export default LayoutOrder;
