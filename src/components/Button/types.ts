export type ButtonColors = 'brand' | 'gray' | 'green' | 'red' | 'yellow';
export type ButtonVariants = 'primary' | 'secondary' | 'ghost';
export type ButtonSizes = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  /** Choose between normal or full-width button */
  block?: boolean;

  /** Button colors */
  color?: ButtonColors;

  /** React element children */
  children?: React.ReactNode;

  /** Disabled state */
  disabled?: boolean;

  /** Set icon to be rendered in the button */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;

  /** Position of the icon to be rendered */
  iconPosition?: 'left' | 'right';

  /** Show loading indicator if set to `true` */
  isLoading?: boolean;

  /** Set loading text */
  loadingText?: string;

  /** Button sizes */
  size?: ButtonSizes;

  /** Button variants */
  variant?: ButtonVariants;
}

export type ButtonProps = ButtonBaseProps &
  React.ComponentPropsWithRef<'button'>;

export type IconButtonProps = Omit<
  ButtonBaseProps,
  'block' | 'children' | 'iconPosition' | 'loadingText'
> &
  React.ComponentPropsWithRef<'button'>;
