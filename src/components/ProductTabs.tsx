import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductTabsProps } from "@/models/ProductTabsPropsModel";

function ProductTabs({ data }: ProductTabsProps) {
  const tabTriggers = [
    { value: "comments", label: "لیست نظرات" },
    { value: "description", label: "توضیحات محصول" },
    { value: "tutorialVideo", label: "ویدئوی آموزشی" },
    { value: "templateGuide", label: "قالب و راهنما" },
    { value: "faq", label: "پرسش و پاسخ" },
  ];

  return (
    <div>
      <Tabs dir="rtl" defaultValue="comments" className="w-full my-8">
        <TabsList
          className="
            w-full 
            flex 
            overflow-x-auto 
            whitespace-nowrap 
            gap-2 
            px-2 
            lg:flex-row 
            lg:overflow-visible 
            scrollbar-hide
          "
        >
          {tabTriggers.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="text-sm lg:text-base px-3 py-2 rounded-lg whitespace-nowrap"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-4">
          <TabsContent value="comments">تب 1</TabsContent>
          <TabsContent value="description">
            <h1 className="font-bold text-lg mb-2">{data.title}</h1>
            {data.description}
          </TabsContent>
          <TabsContent value="tutorialVideo">تب 3</TabsContent>
          <TabsContent value="templateGuide">تب 4</TabsContent>
          <TabsContent value="faq">تب 5</TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default ProductTabs;
