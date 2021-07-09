// Layouts
import PrincipalLayout from '../layouts/PrincipalLayout';

// Pages
import {Home} from '../pages/Home';
import Error404 from '../pages/Error404';

const routes = [
  {
    path: '/',
    layout: PrincipalLayout,
    component: Home,
    exact: true,
  },
  {
    layout: PrincipalLayout,
    component: Error404,
  },
];

export default routes;