import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './BaseButton';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: 'Example',
  color: 'brand',
  size: 'md',
  variant: 'primary',
};
