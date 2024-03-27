import { Inter } from "next/font/google";
import StoreProvider from "./StoreProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Readit",
  description: "The book haven",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
