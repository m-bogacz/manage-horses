import React from 'react';
import NextLink from 'next/link';
import { Link, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

interface ChakraNextLinkProps extends ChakraLinkProps {
  href: any; //todo => poprawić typowanie
  children: React.ReactNode;
}

export const ChakraNextLink = ({ href, children, ...props }: ChakraNextLinkProps) => {
  return (
    <Link as={NextLink} href={href} {...props}>
      {children}
    </Link>
  );
};
