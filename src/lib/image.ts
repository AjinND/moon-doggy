export function resolveImagePath(imageUrl?: string, fallbackImages?: string[], index = 0): string {
  // If a full imageUrl is provided, use it
  if (imageUrl && (imageUrl.startsWith('http') || imageUrl.startsWith('/'))) {
    return imageUrl;
  }

  // If fallback images are provided and valid index exists, use it
  if (fallbackImages && fallbackImages.length > index) {
    const image = fallbackImages[index];
    // If the image path already starts with /images, use as is
    if (image.startsWith('/images/')) {
      return image;
    }
    // Otherwise, assume it's in the artworks folder
    return `/images/artworks/${image}`;
  }

  // Default fallback
  return '/images/placeholder.jpg';
}
