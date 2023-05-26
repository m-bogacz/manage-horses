import {
  Flex,
  Divider,
  Box,
  Text,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Button,
} from '@chakra-ui/react';
import { AppBar } from '../appBar/AppBar';
import { SideBarList } from './components/sideBarList/SideBarList';
import { ChakraNextLink } from '@/shared/chakraNextLink/ChakraNextLink';
import { AddIcon, MinusIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { SearchInput } from './components/SearchInput/SearchInput';
import { useHorses } from '@/hooks/useHorses';
import { useState } from 'react';

interface SideBarProps {
  maxW?: number | string;
}

export const Sidebar = ({ maxW = 240 }: SideBarProps) => {
  const [queryName, setQueryName] = useState('');
  const [queryAge, setQueryAge] = useState<string | undefined>(undefined);
  const { error, data, isLoading } = useHorses(queryName, queryAge);

  const handleChange = (value: string) => {
    setQueryName('');
    setQueryAge(value);
  };

  const handleChangeQuery = (query: string) => {
    setQueryAge(undefined);
    setQueryName(query);
  };

  return (
    <Flex
      position={'fixed'}
      bg="gray.900"
      borderRight="1px"
      borderRightColor="gray.200"
      h="100vh"
      backgroundColor={{ base: 'white', md: 'white' }}
      minW={240}
      flexDir={'column'}
      w={'100vw'}
      maxW={{ base: '100vw', md: maxW }}
    >
      <Box h={'90px'}>
        <AppBar />
      </Box>
      <Divider />

      <Box m={'5px 10px'}>
        <SearchInput onChange={handleChangeQuery} />
        <Accordion allowMultiple mt={1} border={'1px solid'} borderColor={'step.100'} borderRadius={'1px'}>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Search By Age
                    </Box>
                    {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <NumberInput size="md" defaultValue={0} min={0} value={queryAge} onChange={handleChange}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>

      <Divider />
      <Box flex={1} overflowY={'auto'} textAlign={'center'}>
        <SideBarList data={data} isLoading={isLoading} error={error} />
      </Box>
      <Divider />

      <Flex p={5} alignItems="center" justifyContent={'center'}>
        <ChakraNextLink
          href={'/add'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={1}
          border={'1px solid'}
          borderRadius={6}
          w={'100%'}
          height={'100%'}
          color={'white'}
          p={3}
          bg={'button.100'}
        >
          <PlusSquareIcon />
          <Text>Add horse</Text>
        </ChakraNextLink>
      </Flex>
    </Flex>
  );
};

{
  /* <Box>
<Accordion>
  <AccordionItem>
    <AccordionButton pb={4}>Click</AccordionButton>
    <AccordionPanel pb={4}>
      <NumberInput size="md" maxW={24} defaultValue={15} min={10}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</Box> */
}
