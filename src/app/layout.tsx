import Navbar from "@/components/core/navbar";
import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/core/footer";

const Titillium = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Doyos",
  description:
    "We provide the proper trading environment to the clients with 14+ years of experience. We offer high quality order execution, no commission on deposits and withdrawals and wide selection of instruments as we believe that these are the base of the best trading strategies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Titillium.className}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
