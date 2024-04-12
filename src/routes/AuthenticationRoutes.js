import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
//const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthSignin = Loadable(lazy(() => import('views/pages/authentication/authentication3/Signin')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const AuthSignup3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Signup')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      //path: '/pages/login/login3',
      //element: <AuthLogin3 />
      path: '/pages/login/signin',
      element: <AuthSignin />
    },
    {
      path: '/pages/register/register3',
      element: <AuthRegister3 />
    },
    {
      path: '/pages/register/signup',
      element: <AuthSignup3 />
    }
  ]
};

export default AuthenticationRoutes;
