import LayoutOrder from "@/components/LayoutOrder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Order",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <LayoutOrder>{children}</LayoutOrder>
      </body>
    </html>
  );
}
