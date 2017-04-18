import Home from './Home/HomeComponent';
import About from './Home/AboutComponent';

export default function createRoutes(store) {
    return [
        {
            name: 'home',
            path: '/',
            exact: true,
            component: Home
        },
        {
            name: 'about',
            path: '/about',
            component: About
        }
    ];
}