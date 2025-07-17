import SmartInput from '../components/SmartInput';
import type { InputProps } from '../components/SmartInput';
import type { StoryFn } from '@storybook/react/';

export default {
  title: 'Input',
  component: SmartInput,
};

const Template: StoryFn<typeof SmartInput> = (args: InputProps) => <SmartInput {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  clearable: false,
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  clearable: false,
};

export const ClearableText = Template.bind({});
ClearableText.args = {
  type: 'text',
  clearable: true,
};

export const ClearablePassword = Template.bind({});
ClearablePassword.args = {
  type: 'password',
  clearable: true,
};
