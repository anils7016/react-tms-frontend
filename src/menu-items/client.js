// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const client = {
  id: 'clients',
  //title: 'Client',
  type: 'group',
  children: [
    {
      id: 'clients',
      title: 'Clients',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'client',
          title: 'Client',
          type: 'item',
          url: '/client/listing',
          breadcrumbs: false
        },
        {
          id: 'account',
          title: 'Account',
          type: 'item',
          url: '/client/accounts',
          breadcrumbs: false
        },
      ]
    }
  ]
};

export default client;
