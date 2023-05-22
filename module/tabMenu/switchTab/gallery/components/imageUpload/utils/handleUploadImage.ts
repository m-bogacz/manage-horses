import { supabase } from '@/module/uploader/supabaseClient';
import { v4 as uuidv4 } from 'uuid';

export const handleAddImageToSupBase = async (file: Blob, name: string, pathName: string) => {
  const id = uuidv4();
  try {
    const filename = `${pathName}-${id}`;
    const { data, error } = await supabase.storage.from(`horses/horse/${name}`).upload(filename, file, {
      cacheControl: '3600',
      upsert: false,
    });

    if (error) {
      console.error('Error uploading image:', error);
    } else {
      console.log('data upload => ', data);

      return `horses/horse/${name}/${filename}`;
    }
  } catch (error) {
    console.log(error);
  }
};
