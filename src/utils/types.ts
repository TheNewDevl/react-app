export type FooterRef = {
  footerHeight?: number;
  matchMedia?: MediaQueryList;
};

export type HostType = {
  name: string;
  picture: string;
};

export type ApartmentType = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: HostType;
  rating: "1" | "2" | "3" | "4" | "5";
  location: string;
  equipments: string[];
  tags: string[];
};

export type UseFetchType = {
  data: ApartmentType[] | ApartmentType | null;
  isLoading: boolean;
  error: string | null;
};
