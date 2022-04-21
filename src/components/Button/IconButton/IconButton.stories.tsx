import { ComponentMeta, ComponentStory } from '@storybook/react';
import IconButton from './IconButton';

export default {
  title: 'Button/Icon Only',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const IconOnly = Template.bind({});
IconOnly.args = {
  children: 'Icon',
  color: 'brand',
  size: 'md',
  variant: 'primary',
};
