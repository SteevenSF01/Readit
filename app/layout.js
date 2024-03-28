import StoreProvider from "./StoreProvider";
import "./globals.css";


export const metadata = {
  title: "Readit",
  description: "The book haven",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-fit scrollBar-thumb`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
