import { supabase } from './supabaseClient';

export const handleAddImageToSupBase = async (file: File) => {
  try {
    const filename = `${'test'}-${file?.name}`;

    const { data, error } = await supabase.storage.from('horses/horses').upload(filename, file, {
      cacheControl: '3600',
      upsert: false,
    });

    if (error) {
      console.error('Error uploading image:', error);
    } else {
      const data = supabase.storage.from('horses/horses').getPublicUrl(filename);

      return data.data.publicUrl;
    }
  } catch (error) {
    console.log(error);
  }
};
