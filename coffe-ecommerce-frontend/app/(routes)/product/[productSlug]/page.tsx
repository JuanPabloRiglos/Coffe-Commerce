"use client";
import { useGetProductBySlug } from "@/api/useGetProductBySlug";
import { useParams } from "next/navigation";
import { ResponseType } from "@/types/responses";
import { SkeletonProduct } from "./components/skeleton-product";
import { CaruselProduct } from "./components/carusel-product";
import { InfoProduct } from "./components/InfoProducts";

export default function ProductPage() {
  const params = useParams();
  const { productSlug } = params;

  const { result, loading }: ResponseType = useGetProductBySlug(productSlug);

  return (
    <>
      {loading && <SkeletonProduct />}
      {result && !loading && (
        <section className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
          <div className="grid sm:grid-cols-2">
            <div className="">
              <CaruselProduct images={result[0].images} />
            </div>

            <div className="sm:px-12">
              <InfoProduct product={result[0]} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
