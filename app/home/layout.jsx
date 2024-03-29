import Navbar from "../components/navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-fit scrollBar-thumb`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
