import React from 'react';
import Image from 'next/image';
import {
  Flex,
  Box,
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
} from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';

export const FirstStepHorseDetails = () => {
  const { register, control } = useFormContext();
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
          <Input
            id="name"
            placeholder="name"
            {...register('name', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <Input
            id="surname"
            placeholder="surname"
            {...register('surname', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
        </GridItem>
        <GridItem colSpan={4}>
          <Input
            id="date"
            placeholder="Date of birth"
            {...register('date', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
        </GridItem>
      </Grid>
      <Controller
        name="radio"
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup onChange={onChange} value={value}>
            <Stack direction="row">
              <Radio value="mare">mare</Radio>
              <Radio value="gelding">gelding</Radio>
              <Radio value="stallion">stallion</Radio>
            </Stack>
          </RadioGroup>
        )}
      />
    </Flex>
  );
};
