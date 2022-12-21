export interface NavItem {
  label: string;
  id: string;
  route: () => void;
}

export const drawerItems: NavItem[] = [
  {
    id: '1',
    label: 'Start',
    route: () => {},
  },
  {
    id: '2',
    label: 'Your Card',
    route: () => {},
  },
  {
    id: '3',
    label: 'Favourites',
    route: () => {},
  },
  {
    id: '4',
    label: 'Your Orders',
    route: () => {},
  },
];
