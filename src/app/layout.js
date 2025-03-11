import { Inter } from "next/font/google";
import "./globals.css";
import "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "cevidev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body defer className="fondo" >
        {children}
      </body>
    </html>
  );
}
