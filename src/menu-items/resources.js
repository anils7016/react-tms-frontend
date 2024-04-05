// assets
import { IconDashboard } from '@tabler/icons-react';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const resources = {
  id: 'resources',
  title: 'Resource',
  type: 'group',
  children: [
    {
      id: 'internal',
      title: 'Internal Resource',
      type: 'item',
      url: '/resources/internal',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'external',
      title: 'External Resource',
      type: 'item',
      url: '/resources/external',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default resources;
