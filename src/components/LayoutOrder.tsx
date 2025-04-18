import ProductGallerySidebar from "./ProductGallerySidebar";
import ProductDetailsSidebar from "./ProductDetailsSidebar";
import ProductMainContent from "./ProductMainContent";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { layoutOrderPropsModel } from "@/models/layoutOrderPropsModel";

function LayoutOrder({ children, data }: layoutOrderPropsModel) {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 mt-8">
        <ProductGallerySidebar />
        <ProductMainContent>{children}</ProductMainContent>
        <ProductDetailsSidebar data={data} />
      </div>
      <Tabs dir="rtl" defaultValue="comments" className="w-full my-8">
        <TabsList className=" w-full flex ">
          <TabsTrigger value="comments">لیست نظرات</TabsTrigger>
          <TabsTrigger value="description">توضیحات محصول</TabsTrigger>
          <TabsTrigger value="tutorialVideo">ویدئوی آموزشی</TabsTrigger>
          <TabsTrigger value="templateGuide">قالب و راهنما</TabsTrigger>
          <TabsTrigger value="faq">پرسش و پاسخ</TabsTrigger>
        </TabsList>
        <TabsContent value="comments">تب 1</TabsContent>
        <TabsContent value="description">
          <h1 className="font-bold">{data.title}</h1>
          {data.description}</TabsContent>
        <TabsContent value="tutorialVideo">تب3</TabsContent>
        <TabsContent value="templateGuide">تب 4</TabsContent>
        <TabsContent value="faq">تب 5</TabsContent>
      </Tabs>
    </>
  );
}

export default LayoutOrder;
