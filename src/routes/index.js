import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from './Home';
import PublicRoute from './PublicRoute';
import Restaurant from './Restaurant/index';
import LayoutComponent from '../components/Layout/Layout.component';

const publicRoute = [
  {
    path: 'home',
    component: <Home />,
    exact: true,
    restrict: true,
  },
  {
    path: 'restaurant',
    component: <Restaurant />,
    exact: true,
    restrict: true,
  },
];

const privateRoute = [];

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <LayoutComponent>
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route exact path="/" element={<PrivateRoute />}>
            {privateRoute.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
                exact={route.exact}
                restrict={route.restrict}
              />
            ))}
          </Route>
          <Route exact path="/" element={<PublicRoute />}>
            {publicRoute.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
                exact={route.exact}
                restrict={route.restrict}
              />
            ))}
          </Route>
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </LayoutComponent>
    </BrowserRouter>
  );
};

export default RouterComponent;
