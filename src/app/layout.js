import { Inter } from "next/font/google";
import "./globals.css";
import "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "carlose-vi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="fondo" >{children}</body>
    </html>
  );
}
