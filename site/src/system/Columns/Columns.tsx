import React, { Children, ReactNode } from 'react';
import { Box, BoxProps } from '../Box/Box';

type AlignY = 'top' | 'center' | 'bottom';

interface Props {
  children: ReactNode;
  space: BoxProps['padding'];
  alignY?: AlignY;
  collapseOnMobile?: boolean;
}

const resolveAlignY: Record<AlignY, BoxProps['alignItems']> = {
  top: 'flexStart',
  bottom: 'flexEnd',
  center: 'center',
};

export const Columns = ({
  children,
  space,
  collapseOnMobile = false,
  alignY = 'top',
}: Props) => {
  const columns = Children.toArray(children);

  return (
    <Box
      display="flex"
      flexDirection={
        collapseOnMobile ? { mobile: 'column', desktop: 'row' } : undefined
      }
      alignItems={resolveAlignY[alignY]}
      marginLeft={
        collapseOnMobile
          ? { mobile: 'none', desktop: `-${space}` }
          : `-${space}`
      }
      marginTop={
        collapseOnMobile ? { mobile: `-${space}`, desktop: 'none' } : undefined
      }
    >
      {columns.map((c, i) => (
        <Box
          paddingLeft={
            collapseOnMobile ? { mobile: 'none', desktop: space } : space
          }
          paddingTop={
            collapseOnMobile ? { mobile: space, desktop: 'none' } : undefined
          }
          style={{ width: '100%', minWidth: 0 }}
          key={i}
        >
          {c}
        </Box>
      ))}
    </Box>
  );
};
