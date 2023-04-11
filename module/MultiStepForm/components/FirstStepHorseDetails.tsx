import React from 'react';
import Image from 'next/image';
import {
  Flex,
  Center,
  Heading,
  Text,
  Button,
  Input,
  GridItem,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  FormErrorMessage,
  FormControl,
} from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';

export const FirstStepHorseDetails = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Flex flexDir={'column'}>
      <Center w={'100%'} border={'1px dashed #718096'} p={5}>
        <Image priority src="/horse.svg" height={77} width={69} alt="Logo App" />

        <Flex flexDir={'column'} align="center" ml={5}>
          <Heading size={'lg'}>Drag & drop</Heading>
          <Text>To upload</Text>
          <Button bg={'button.100'} color="white" minW={180}>
            Select File
          </Button>
        </Flex>
      </Center>
      <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={5} mb={5}>
        <GridItem colSpan={2}>
          <FormControl isInvalid={Boolean(errors.name)}>
            <Input id="name" placeholder="name" {...register('name')} />
            {errors.name && <FormErrorMessage>{errors?.name?.message?.toString()}</FormErrorMessage>}
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl isInvalid={Boolean(errors.surname)}>
            <Input id="surname" placeholder="surname" {...register('surname')} />
            {errors.surname && <FormErrorMessage>{errors?.surname?.message?.toString()}</FormErrorMessage>}
          </FormControl>
        </GridItem>
        <GridItem colSpan={4}>
          <FormControl isInvalid={Boolean(errors.date)}>
            <Input id="date" placeholder="Date of birth" {...register('date')} />
            {errors.date && <FormErrorMessage>{errors?.date?.message?.toString()}</FormErrorMessage>}
          </FormControl>
        </GridItem>
      </Grid>
      <FormControl isInvalid={Boolean(errors.sex)}>
        <Controller
          name="sex"
          control={control}
          render={({ field: { onChange, value } }) => (
            <RadioGroup onChange={onChange} value={value} name="sex">
              <Stack direction="row">
                <Radio {...register('sex')} value="mare">
                  mare
                </Radio>
                <Radio {...register('sex')} value="gelding">
                  gelding
                </Radio>
                <Radio {...register('sex')} value="stallion">
                  stallion
                </Radio>
              </Stack>
            </RadioGroup>
          )}
        />
        {errors.sex && <FormErrorMessage>{errors?.sex?.message?.toString()}</FormErrorMessage>}
      </FormControl>
    </Flex>
  );
};
