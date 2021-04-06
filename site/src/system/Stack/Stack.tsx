import React, { Children, ReactNode } from 'react';
import { Box } from '../';
import { BoxProps } from '../Box/Box';

export const Stack = ({
  children,
  space,
}: {
  children: ReactNode;
  space: BoxProps['paddingBottom'];
}) => {
  const stackItems = Children.toArray(children);

  return (
    <Box>
      {stackItems.map((item, index) => (
        <Box
          key={index}
          paddingBottom={index !== stackItems.length - 1 ? space : undefined}
        >
          {item}
        </Box>
      ))}
    </Box>
  );
};
