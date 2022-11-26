type StyleModule = { [key: string]: string };

export const handleArrowClassName = (s: StyleModule, open: boolean): string => {
  return open ? `${s.accordion__header_control} ${s.rotate}` : `${s.accordion__header_control}`;
};

export const handleContentClassName = (s: StyleModule, open: boolean, isSmall?: boolean): string => {
  return isSmall ? `${s.accordion__content_text} ${s.accordion__content_text_small}` : `${s.accordion__content_text}`;
};

export const handleBannerClass = (highest: boolean | undefined, s: StyleModule): string => {
  return highest ? `${s.banner} ${s.fixed_height}` : s.banner;
};
