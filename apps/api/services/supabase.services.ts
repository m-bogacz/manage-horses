export const downloadImageFromSupBase = (nameImage: string, width: number, height: number, quality = 75) => {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${nameImage}?width=${width}&height=${height}&quality=${quality}`;
};

export const getDefaultPhoto = () => {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/horses/horses/horse.jpeg`;
};
