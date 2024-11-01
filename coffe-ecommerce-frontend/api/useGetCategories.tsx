import { useEffect, useState } from "react";

export function useGetCategories() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState("");

  

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        // console.log('llega',json.data)
        setResult(json.data);
        setLoading(false);
      } catch (error: any) {
        seterror(error);
        setLoading(false);
      }
    })();
  }, [url]);
  return { loading, result, error };
}
