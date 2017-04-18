import { getAsyncInjectors } from './utils/asyncInjectors';
import asyncComponent from './utils/asyncComponent';
// import Home from './Home/HomeComponent';
// import About from './Home/AboutComponent';

export default function createRoutes(store) {
    return [
        {
            name: 'Home',
            path: '/',
            exact: true,
            component: asyncComponent(() => import('./Home/HomeComponent').then(module => module.default), { name: 'Home' })
        },
        {
            name: 'About',
            path: '/about',
            component: asyncComponent(() => import('./Home/AboutComponent').then(module => module.default), { name: 'About' })
        }
    ];
}