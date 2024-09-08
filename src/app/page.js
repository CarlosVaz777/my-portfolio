import Image from "next/image";
import styles from "./page.module.css";
import NavbarPrincipal from "../pages/Navbar";

export default function Home() {
  return (
   <>
   <main className="fondo">
    <div>
      <NavbarPrincipal />
    </div>
   </main>
   </>
  );
}
