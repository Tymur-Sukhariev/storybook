export type MenuItem = {
  label: string;
  children?: MenuItem[];
};

export const oneLevelMenu: MenuItem[] = [
  {
    label: 'Orders',
    children: [{ label: 'Pending' }, { label: 'Completed' }],
  },
  {
    label: 'Products',
    children: [{ label: 'Inventory' }, { label: 'Categories' }],
  },
];

export const twoLevelMenu: MenuItem[] = [
  {
    label: 'Settings',
    children: [
      {
        label: 'Account',
        children: [{ label: 'Profile' }, { label: 'Security' }],
      },
    ],
  },
];
