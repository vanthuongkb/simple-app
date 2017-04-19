import {getAsyncInjectors} from './utils/asyncInjectors';
import asyncComponent from './utils/asyncComponent';
// import Home from './Home/Home';
// import About from './Home/AboutComponent';

export default function createRoutes(store) {
  return [
    {
      name: 'Home',
      path: '/',
      exact: true,
      component: asyncComponent(() =>
          import('./scenes/Home').then(module => module.default),
        { name: 'Home' })
    },
    {
      name: 'About',
      path: '/about',
      component: asyncComponent(
        () => import('./scenes/About').then(module => module.default),
        { name: 'About' })
    },
    {
      name: 'Inventory',
      path: '/inventory',
      component: asyncComponent(
        () => import('./scenes/Inventory').then(module => module.default),
        { name: 'Inventory' }
      )
    }
  ];
}