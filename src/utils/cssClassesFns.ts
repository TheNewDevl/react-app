export const handleBannerClass = (highest: boolean | undefined, s: { readonly [key: string]: string }): string => {
  return highest ? `${s.banner} ${s.fixed_height}` : s.banner;
};
