import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Userform from 'views/resources/Userform';
import Accountform from 'views/clients/Accountform';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// Resource routing
const InternalResource = Loadable(lazy(() => import('views/resources/Internal')));
const ExternalResource = Loadable(lazy(() => import('views/resources/External')));
// Client routing
const ClientaccountList = Loadable(lazy(() => import('views/clients/ClientAccounts')));
const ClientListing = Loadable(lazy(() => import('views/clients/Clients')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'resources',
      children: [
        {
          path: 'internal',
          element: <InternalResource />
        },{
          path: 'external',
          element: <ExternalResource />
        }
      ]
    },
    {
      path: 'client',
      children: [
        {
          path: 'listing',
          element: <ClientListing />
        }
      ]
    },
    {
      path: 'client',
      children: [
        {
          path: 'accounts',
          element: <ClientaccountList />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'createuser',
      element: <Userform />
    },
    {
      path: 'updateuser/:id',
      element: <Userform />
    },
    {
      path: 'createaccount',
      element: <Accountform />
    },
    {
      path: 'updateaccount/:id',
      element: <Accountform />
    },
    

  ]
};

export default MainRoutes;
