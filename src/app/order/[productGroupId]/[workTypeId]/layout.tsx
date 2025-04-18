import LayoutOrder from "@/components/LayoutOrder";
import type { Metadata } from "next";
import productServices from "@/services/product";

import { CombinedPropsModel } from "@/models/combinedPropsModel";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Order",
  },
};

export default async function RootLayout({
  children,
  params,
}: CombinedPropsModel) {
  const { productGroupId, workTypeId } = await params;
  const data = await productServices.getProducts(productGroupId, workTypeId);

  return (
    <html lang="fa" dir="rtl">
      <body>
        <LayoutOrder data={data}>{children}</LayoutOrder>
      </body>
    </html>
  );
}
