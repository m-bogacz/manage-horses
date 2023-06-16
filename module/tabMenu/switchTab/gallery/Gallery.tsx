import React, { useState } from 'react';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import PhotoAlbum from 'react-photo-album';
import NextJsImage from './components/NextJsPhotos';
import ImageUpload from './components/imageUpload/ImageUpload';
import { Modal } from '@/shared/modal/Modal';
import { usePhotos } from './hooks/useQueryPhotos';
import { useHorseContext } from '@/apps/context/HorseContext';
import getPhotos from './utils/photos';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

export const Gallery = () => {
  const { name } = useHorseContext();
  console.log('gallery =>', name);
  const [index, setIndex] = useState(-1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = usePhotos(name);

  if (!data) return null;

  const createdDataImages = data.data.map((image) => {
    return {
      ...image,
      width: 1180,
      height: 980,
    };
  });

  const photos = getPhotos(createdDataImages);

  return (
    <>
      <Box textAlign={'right'} paddingBottom={5}>
        <Button onClick={onOpen}>Add Image</Button>
      </Box>
      <Modal
        title={'Add image to gallery'}
        buttons={null}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        size={'5xl'}
      >
        <ImageUpload onClose={onClose} />
      </Modal>
      {createdDataImages && (
        <Box overflowY={'auto'}>
          <PhotoAlbum
            layout="rows"
            photos={photos}
            padding={15}
            spacing={10}
            columns={(containerWidth) => {
              if (containerWidth < 400) return 2;
              if (containerWidth < 800) return 3;
              return 4;
            }}
            renderPhoto={NextJsImage}
            defaultContainerWidth={1200}
            sizes={{ size: 'calc(100vw - 240px)' }}
            onClick={({ index }) => setIndex(index)}
          />
          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </Box>
      )}
    </>
  );
};
