import Toast from '../components/Toast';
import type { StoryFn } from '@storybook/react';

export default {
  title: 'Feedback',
  component: Toast,
};

const Template: StoryFn<typeof Toast> = (args) => <Toast {...args} />;

export const SuccessToast = Template.bind({});
SuccessToast.args = {
  type: 'success',
  text: 'Welcome!',
  duration: 2000,
};

export const FailToast = Template.bind({});
FailToast.args = {
  type: 'fail',
  text: 'Fail happened!',
  duration: 2500,
};

export const DefaultToast = Template.bind({});
DefaultToast.args = {
  type: 'default',
  text: 'Default Toast!',
  duration: 2500,
};
