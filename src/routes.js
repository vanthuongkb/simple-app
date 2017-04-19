import { getAsyncInjectors } from './utils/asyncInjectors';
import asyncComponent from './utils/asyncComponent';

import {HOME_PAGE, ABOUT_PAGE} from './constants';

export default function createRoutes(store) {
    return [
        {
            path: HOME_PAGE,
            exact: true,
            component: asyncComponent(() => import('./Views/Home').then(module => module.default))
        },
        {
            path: ABOUT_PAGE,
            exact: true,
            component: asyncComponent(() => import('./Views/About').then(module => module.default))
        },
        {
            path: '/*',
            exact: true,
            component: asyncComponent(() => import('./Views/NotFound').then(module => module.default)),
            shouldRedirectTo:'/404'
        }
    ];
}