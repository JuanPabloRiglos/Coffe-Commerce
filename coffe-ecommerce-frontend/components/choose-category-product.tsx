"use client";

import Link from "next/link";
//fn llama a la api
import { useGetCategories } from "@/api/useGetCategories";
//types
import { ResponseType } from "@/types/responses";
import { CategoryType } from "@/types/category";
//component
export function ChooseCategoryProduct() {
  const { loading, result }: ResponseType = useGetCategories();
console.log( "el result es :", result)
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">Busca por Categoria</h3>
      <div className="grid gap-5 sm:grid-cols-3">
        {!loading &&
          result !== undefined &&
          result.map((category: CategoryType) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className=" relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage.url}`}
                alt={`Imagen de la categoria de nombre :${category.categoryName}`}
                className="max-w-[270px] h-[150px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
              />
              <p className="absolute w-full text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                {category.categoryName}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
}
