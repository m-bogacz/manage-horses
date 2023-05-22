export const getDefaultExamplephoto = () => {
  return 'https://dpdasginastynijsarwv.supabase.co/storage/v1/object/public/horses/horses/horse.jpeg';
};

export const downloadImageFromSupBase = (nameImage: string, width: number, height: number, quality = 75) => {
  return `https://dpdasginastynijsarwv.supabase.co/storage/v1/object/public/${nameImage}?width=${width}&height=${height}&quality=${quality}`;
};
