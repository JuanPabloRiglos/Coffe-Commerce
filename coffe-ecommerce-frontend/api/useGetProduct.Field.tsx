import { ResultFiltersTypes } from "@/types/filters";
import { useEffect, useState } from "react";

export function useGetProductField() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`;

  const [result, setResult] = useState<ResultFiltersTypes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    //una funcion autollamada para podes usar async/await dento del effct.
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [url]);

  return { loading, result, error };
}
