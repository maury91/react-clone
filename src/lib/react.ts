import React, { ReactElement, ReactNode } from 'react';

export const createElement = (type: string | React.FC, props: object | null, ...children: ReactNode[]): ReactElement => {
  console.log('calling me!');
  return {
    type,
    props: {
      ...(props ?? {}), children
    }
  }
}