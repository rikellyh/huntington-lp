import type { Metadata } from "next";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { lato } from "../../public/assets/fonts/fonts";

import "swiper/swiper-bundle.css";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Huntington",
  description:
    "O Congresso Internacional Huntington de medicina reprodutiva acontece nos dias 11 e 12 de abril de 2025.",
  keywords: ["Huntington", "Congresso", "medicina reprodutiva"],
  applicationName: "Huntington",
  authors: {
    name: "Huntington",
    url: "https://huntington.com.br/",
  },
  icons: {
    icon: ["/favicon.png"],
    apple: ["/favicon.png"],
    shortcut: ["/favicon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`bg-support-700 ${lato.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
