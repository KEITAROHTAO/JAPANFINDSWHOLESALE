import "./globals.css";
import Header from "@/components/Header";
import { OrderStore } from "@/components/OrderStore";

export const metadata = {
  title: "JAPAN FINDS WHOLESALE",
  description: "Direct supply of Japan surplus items in the Philippines.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <OrderStore>
          <Header />
          {children}
        </OrderStore>
      </body>
    </html>
  );
}
