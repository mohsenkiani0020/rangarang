import { ChildrenPropsModel } from "@/models/childrenPropsModel";
import React from "react";
import ProductGallerySidebar from "./ProductGallerySidebar";
import ProductDetailsSidebar from "./ProductDetailsSidebar";
import ProductMainContent from "./ProductMainContent";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function LayoutOrder({ children }: ChildrenPropsModel) {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 mt-8">
        <ProductGallerySidebar />
        <ProductMainContent>{children}</ProductMainContent>
        <ProductDetailsSidebar />
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
        <TabsContent value="description">تب 2</TabsContent>
        <TabsContent value="tutorialVideo">تب3</TabsContent>
        <TabsContent value="templateGuide">تب 4</TabsContent>
        <TabsContent value="faq">تب 5</TabsContent>
      </Tabs>
    </>
  );
}

export default LayoutOrder;
