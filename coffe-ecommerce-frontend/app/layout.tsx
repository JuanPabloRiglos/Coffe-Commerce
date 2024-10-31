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
//toploader
import NextTopLoader from "nextjs-toploader"
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
          <NextTopLoader
  color="red"
  initialPosition={0.08}
  crawlSpeed={100}
  height={3}
  crawl={true}
  showSpinner={false}
  easing="ease"
  speed={200}
  shadow="0 0 10px #2299DD,0 0 5px #2299DD"
  template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  zIndex={1600}
  showAtBottom={false}
/>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
