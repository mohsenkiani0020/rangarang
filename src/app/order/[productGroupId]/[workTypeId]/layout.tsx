import LayoutOrder from "@/components/LayoutOrder";
import type { Metadata } from "next";
import productServices from "@/services/product";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Order",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{productGroupId : string , workTypeId : string}>;
}) {
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
