import { useEffect, useState } from "react";
import { ApartmentType, dataType, GetHookFetchReturnValue } from "../utils/types";

const findApartment = (id: ApartmentType["id"], data: ApartmentType[]): ApartmentType => {
  const apartment: ApartmentType | undefined = data.find((ap) => ap.id === id);
  if (!apartment) throw new Error("Logement introuvable");
  return apartment;
};

export function useFetch<S extends string, T extends string | undefined>(url: S, id?: T): GetHookFetchReturnValue<T>;
export function useFetch(url: string, id: string | undefined) {
  const [data, setData] = useState<dataType<typeof id> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url, {
          method: "GET",
        });
        if (res.ok) {
          const data = await res.json();
          setData(id ? findApartment(id, data) : data);
        }
      } catch (error: any) {
        setError(error.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, isLoading };
}

/** Created by carlos on 22/11/2022 */
