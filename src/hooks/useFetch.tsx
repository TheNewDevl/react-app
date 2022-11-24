import { useEffect, useState } from "react";
import { ApartmentType, UseFetchType } from "../utils/types";

const findApartment = (id: ApartmentType["id"], data: ApartmentType[]): ApartmentType => {
  const apartment: ApartmentType | undefined = data.find((ap) => ap.id === id);
  if (!apartment) throw new Error("Logement introuvable");
  return apartment;
};

export const useFetch = (url: string, id?: ApartmentType["id"]): UseFetchType => {
  const [data, setData] = useState<ApartmentType[] | null | ApartmentType>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url, {
          method: "GET",
        });
        if (res.ok) {
          const data = await res.json();
          if (id) {
            const apartment = findApartment(id, data);
            setData(apartment);
          } else {
            setData(data);
          }
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
};
/** Created by carlos on 22/11/2022 */
