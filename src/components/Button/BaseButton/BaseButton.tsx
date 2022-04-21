import React from 'react';
import { ButtonProps } from '../types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      block,
      color = 'brand',
      children,
      className,
      disabled,
      isLoading,
      icon,
      iconPosition,
      loadingText = 'Loading . . .',
      size = 'md',
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    return (
      <button disabled={isLoading ?? disabled} ref={ref} {...rest}>
        {isLoading ? loadingText : children}
      </button>
    );
  }
);

export default Button;
