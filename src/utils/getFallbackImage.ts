const getFallbackImage = (imageSrc: string | undefined | null, defaultImageSrc: string) => imageSrc || defaultImageSrc;

export default getFallbackImage;
