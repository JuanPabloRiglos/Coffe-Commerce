import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
//letra
const urbanist = Urbanist({ subsets: ["latin"] });

//Meta data para Seo
export const metadata: Metadata = {
  title: "Coffe-Commerce",
  description: "Bienvenidos a el ecommerce de muestra",
};

//componentes
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/themre-provider";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
