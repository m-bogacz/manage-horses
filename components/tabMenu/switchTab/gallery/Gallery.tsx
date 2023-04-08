import React from 'react';
import { Box } from '@chakra-ui/react';
import PhotoAlbum from 'react-photo-album';
import NextJsImage from './NextJsPhotos';
import photos from './photos';

export const Gallery = () => {
  return (
    <Box overflowY={'scroll'} h={'1000px'} pb={5} mb={55}>
      <PhotoAlbum
        layout="masonry"
        photos={photos}
        columns={(containerWidth) => {
          if (containerWidth < 400) return 2;
          if (containerWidth < 800) return 3;
          return 4;
        }}
        renderPhoto={NextJsImage}
      />
    </Box>
  );
};
