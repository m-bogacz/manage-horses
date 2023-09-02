import { supabase } from '@/module/uploader/supabaseClient';

export const handleChangeImageToSupBase = async (file: Blob, name: string) => {
  try {
    const filename = 'profileImageUrl';
    const { data, error } = await supabase.storage.from(`horses/horse/${name}`).upload(filename, file, {
      cacheControl: '0',
      upsert: true,
    });

    if (data) {
      console.log(data);
    }

    if (error) {
      console.error('Error uploading image:', error);
    } else {
      const file = supabase.storage.from(`horses/horse/${name}`).getPublicUrl(filename);

      return file.data.publicUrl;
    }
  } catch (error) {
    console.log(error);
  }
};
