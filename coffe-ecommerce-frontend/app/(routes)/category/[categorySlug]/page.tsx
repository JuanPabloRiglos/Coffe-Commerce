"use client";
import { useParams, useRouter } from "next/navigation";
//shadcn cmponets
import { Separator } from "@/components/ui/separator";
//types
import { ResponseType } from "@/types/responses";
//Functios
import { useGetCategoryProduct } from "@/api/useGetCategoryProduct";
//Componets
import { SkeletonSchema } from "@/components/skeletonSchema"; //usa shacn
import { FiltersControlCategory } from "../components/filters-controls-categoy";
import { ProductCard } from "../components/product-Card";
import { Productype } from "@/types/product";
import { useState } from "react";

//Visa o componente -
export default function PageCategory() {
  const params = useParams();
  const { categorySlug } = params;
  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug); //llama a la api
  const [filterOrigin, setFilterOrigin] = useState("");
  const router = useRouter();

  //Fn que recibe la seleccion del origine del producto y filtra los resultados. Por default viene vacia
  const filteredProducts =
    result !== null &&
    !loading &&
    (filterOrigin === ""
      ? result
      : result.filter((product: Productype) => product.origin == filterOrigin));

  console.log("result =", filteredProducts);
  console.log(filterOrigin);
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result !== null && !loading && (
        <h1 className="text-3xl font-medium">
          {" "}
          Cafe en formato {result[0].category.categoryName}{" "}
        </h1>
      )}
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlCategory setFilterOrigin={setFilterOrigin} />

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonSchema grid={3} />}
          {filteredProducts !== null &&
            !loading &&
            filteredProducts.map((product: Productype) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {filteredProducts !== null &&
            !loading &&
            filteredProducts.length === 0 && (
              <p>No hay prodcutos con estas especificaciones</p>
            )}
        </div>
      </div>
    </div>
  );
}
