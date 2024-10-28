import { BannerDiscount } from "@/components/banner-discount";
import { BannerProducts } from "@/components/banner-products";
import { CarouselTextBanner } from "@/components/carousel-text-banner";
import { ChooseCategoryProduct } from "@/components/choose-category-product";
import { FeaturedProducts } from "@/components/featured-products";
export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategoryProduct />
      <BannerProducts />
    </main>
  );
}
