import Image from 'next/image';
import { Box, Button, Flex, FormLabel, Input, VisuallyHidden, useToast } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { useImageUpload } from './hooks/useImageUpload';
import { handleAddImageToSupBase } from './utils/handleUploadImage';
import { useHorseContext } from '@/apps/context/HorseContext';
import { useAddPhoto } from './hooks/useAddPhoto';

interface ImageProps {
  src: string;
  alt: string;
}

interface ImageUploadProps {
  label?: string;
  initialImage?: ImageProps | null;
  objectFit?: 'cover' | 'contain' | 'none' | 'fill' | 'scale-down';
  accept?: string;
  sizeLimit?: number;
  onClose: () => void;
}

const ImageUpload = ({
  label = 'Add Image',
  initialImage = null,
  accept = '.png, .jpg, .jpeg, .gif',
  sizeLimit = 10 * 1024 * 1024,
  onClose,
}: ImageUploadProps) => {
  const toast = useToast();
  const { name } = useHorseContext();
  const { mutation } = useAddPhoto();
  const { image, updatingPicture, pictureRef, pictureError, setImage, handleOnClickPicture, handleOnChangePicture } =
    useImageUpload({
      initialImage,
      sizeLimit,
    });

  const addImage = async () => {
    if (!image) return;

    try {
      const fileBlob = await fetch(image.src).then((res) => res.blob());
      const path = await handleAddImageToSupBase(fileBlob, name, image.alt);
      if (path) {
        await mutation.mutateAsync({ src: path, alt: image.alt, name: name });
      }
      toast({
        title: `Image has been successfully added.`,
        status: 'success',
        position: 'top',
      });
      setImage(null);
      onClose();
    } catch (error) {
      console.log(error);
      toast({
        title: `Image has been failed added.`,
        status: 'error',
        position: 'top',
      });
    }
  };

  return (
    <Flex direction="column" align="center" justify="center" h="full" w={'full'}>
      <Flex direction="column" width={{ sm: '50%', base: '100%' }} h={300} align="center" justify="center">
        {image?.src ? (
          <>
            <Box border={'1px solid'} borderColor={'step.200'} mb={2}>
              <Image src={image.src} width={350} height={200} alt={image.alt} />
            </Box>
            <Flex gap={2}>
              <Button onClick={() => setImage(null)}>cancel</Button>

              <Button isLoading={mutation.isLoading} colorScheme={'cyan'} onClick={addImage}>
                save
              </Button>
            </Flex>
          </>
        ) : (
          <Box textAlign={'center'}>
            <FormLabel id="gallery" mr={0}>
              {label}
            </FormLabel>
            <Button disabled={updatingPicture} onClick={handleOnClickPicture} borderRadius={50}>
              <DownloadIcon />
              <VisuallyHidden>
                <Input ref={pictureRef} type="file" name="gallery" accept={accept} onChange={handleOnChangePicture} />
              </VisuallyHidden>
            </Button>

            {pictureError ? <Box as={'span'}>{pictureError}</Box> : null}
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default ImageUpload;
