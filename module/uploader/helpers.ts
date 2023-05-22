import { useId } from 'react';
import { supabase } from './supabaseClient';
import { v4 as uuidv4 } from 'uuid';

export const handleAddImageToSupBase = async (file: Blob) => {
  const id = uuidv4();
  try {
    const filename = `${'horse' + id}`;

    const { data, error } = await supabase.storage.from('horses/horses').upload(filename, file, {
      cacheControl: '3600',
      upsert: false,
    });

    if (error) {
      console.error('Error uploading image:', error);
    } else {
      console.log('data upload => ', data);

      const file = supabase.storage.from('horses/horses').getPublicUrl(filename);

      return file.data.publicUrl;
    }
  } catch (error) {
    console.log(error);
  }
};
