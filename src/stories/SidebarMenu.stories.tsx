import SidebarMenu from '../components/SidebarMenu';
import { oneLevelMenu, twoLevelMenu, type MenuItem } from '../data/menuItems';
import type { StoryFn } from '@storybook/react/';

export default {
  title: 'Navigation',
  component: SidebarMenu,
};

interface MenuProps {
  items: MenuItem[];
}

const Template: StoryFn<typeof SidebarMenu> = (args: MenuProps) => <SidebarMenu {...args} />;

export const OpenOneLevel = Template.bind({});
OpenOneLevel.args = {
  items: oneLevelMenu,
  isOnStartOpen: true,
};
export const TwoLevel = Template.bind({});
TwoLevel.args = {
  items: twoLevelMenu,
  isOnStartOpen: false,
};
