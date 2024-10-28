"use client";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
//components
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

export const dataCarusel = [
  {
    id: 1,
    title: "Envio en 24/48 hs.",
    description:
      "Como cliente Vip, tus envios se despachan en 24hs. Obten mas informacion.",
    link: "#!",
  },
  {
    id: 2,
    title:
      "Consigue hasta un -25% en compras superiores a 100 $ (dolar americano)",
    description:
      "-20% al gastar 100 $ o -25 al gastar 150 $. Usa el codigo promocional",
    link: "#!",
  },
  {
    id: 3,
    title: "Devoluciones y entregas gratuitas",
    description:
      "Como cliente, tienes envios y devoluciones gratis en un plazo de 48 hs.",
    link: "#!",
  },
  {
    id: 4,
    title: "Ver novedades",
    description: "Todas las novedades con un 10% de descuento. Descubre ahora!",
    link: "#!",
  },
];

export function CarouselTextBanner() {
  const router = useRouter();
  return (
    <div className="bg-gray-300 dark:bg-primary">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarusel.map((item) => (
            <CarouselItem key={item.id} onClick={() => router.push(item.link)}>
              <div>
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                    <p className="sm:text-lg text-wrap dark:text-secondary">
                      {item.title}
                    </p>
                    <p className=" text-xs sm:text-sm text-wrap dark:text-secondary">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
