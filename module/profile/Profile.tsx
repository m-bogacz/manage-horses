import { useHorseContext } from '@/apps/context/horseContext/HorseContext';
import { dateHelper } from '@/lib/dateHelper';
import { Box, Center, Text, Image, VStack, Flex, useDisclosure, Button } from '@chakra-ui/react';
import { ManageHorseAction } from './components/manageHorseAction/ManageHorseAction';
import { Feature } from './components/feature/Feature';
import { FeatureParent } from './components/feature/FeatureParent';
import { getDefaultPhoto } from '@/apps/api/services/supabase.services';
import { useCheckAdmin } from '@/hooks/useCheckAdmin';
import { Modal } from '@/shared/modal/Modal';
import { ImageUploader } from './components/uploader/Uploader';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { handleChangeImageToSupBase } from './components/uploader/utils/handleChangeImage';
import { FiCamera } from 'react-icons/fi';

export const Profile = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const { name, birthday, gender, place, profileImageUrl: profileImage, mother, father } = useHorseContext();

  console.log(profileImage);

  const defaultImageValues = {
    profileImageUrl: '',
  };
  const methods = useForm({ defaultValues: defaultImageValues });

  const onSubmit: SubmitHandler<typeof defaultImageValues> = async (data) => {
    try {
      const fileBlob = await fetch(data?.profileImageUrl).then((res) => res.blob());
      await handleChangeImageToSupBase(fileBlob, name);
    } catch (error) {
      console.log('nie udało się dodać');
    }
  };

  return (
    <Flex w={'100%'} flexDir={'column'} bg="table.100" borderRadius={16} m={{ base: 0, md: 10 }}>
      <Box flex={1}>
        <Center padding={10} paddingBottom={2} position={'relative'}>
          <Image
            boxSize="200px"
            src={profileImage ? profileImage : getDefaultPhoto()}
            alt={`profile image of ${name}`}
            borderRadius="full"
            objectFit="cover"
          />
          <Button
            leftIcon={<FiCamera size={50} />}
            onClick={onOpen}
            _hover={{ backgroundColor: 'transparent', color: 'step.activeText' }}
            sx={{
              color: 'step.200',
              backgroundColor: 'transparent',
              position: 'absolute',
              bottom: 4,
              right: 10,
              padding: 0,
            }}
          />
        </Center>

        <FormProvider {...methods}>
          <Box textAlign={'right'} paddingBottom={5}></Box>

          <Modal
            as={'form'}
            title={'Add image to gallery'}
            onSubmit={methods.handleSubmit(onSubmit)}
            buttons={
              <Button variant={'outline'} type="submit">
                save image
              </Button>
            }
            showButton
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            size={'5xl'}
          >
            <ImageUploader name={'profileImageUrl'} />
          </Modal>
        </FormProvider>

        <Center>
          <Text fontSize="xx-large">{name}</Text>
        </Center>

        <VStack spacing={0} ml={2} alignItems={'flex-start'}>
          <Feature title="Birthday" desc={birthday ? dateHelper(birthday).format('DD/MM/YYYY') : ''} />
          <Feature title="Gender" desc={gender} />
          <Feature title="Place" desc={place} />
          <FeatureParent title="Mother" parent={mother} />
          <FeatureParent title="Father" parent={father} />
        </VStack>
      </Box>
      {useCheckAdmin() ? <ManageHorseAction /> : null}
    </Flex>
  );
};
