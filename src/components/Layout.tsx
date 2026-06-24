import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { Preloader } from "./Preloader";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Preloader />
      <Header />
      <FloatingActions />
      <main className="pt-24 md:pt-28">{children}</main>
      <Footer />
    </>
  );
}
