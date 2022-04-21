import React from 'react';
import { IconButtonProps } from '../types';

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      color = 'brand',
      children,
      className,
      disabled,
      isLoading,
      icon,
      size = 'md',
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    return (
      <button disabled={isLoading ?? disabled} ref={ref} {...rest}>
        {isLoading ? 'spinner' : children}
      </button>
    );
  }
);

export default IconButton;
