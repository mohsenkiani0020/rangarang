import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductTabsProps } from "@/models/ProductTabsPropsModel";

function ProductTabs({ data }: ProductTabsProps) {
  return (
    <Tabs dir="rtl" defaultValue="comments" className="w-full my-8">
      <TabsList className="w-full flex">
        <TabsTrigger value="comments">لیست نظرات</TabsTrigger>
        <TabsTrigger value="description">توضیحات محصول</TabsTrigger>
        <TabsTrigger value="tutorialVideo">ویدئوی آموزشی</TabsTrigger>
        <TabsTrigger value="templateGuide">قالب و راهنما</TabsTrigger>
        <TabsTrigger value="faq">پرسش و پاسخ</TabsTrigger>
      </TabsList>

      <TabsContent value="comments">تب 1</TabsContent>
      <TabsContent value="description">
        <h1 className="font-bold">{data.title}</h1>
        {data.description}
      </TabsContent>
      <TabsContent value="tutorialVideo">تب 3</TabsContent>
      <TabsContent value="templateGuide">تب 4</TabsContent>
      <TabsContent value="faq">تب 5</TabsContent>
    </Tabs>
  );
}

export default ProductTabs;
