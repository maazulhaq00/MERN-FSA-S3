import { Outlet } from 'react-router-dom';
import { Layout as DashboardLayout } from './layouts/dashboard/layout';
import IconsPage from './pages1/icons';
import NotFoundPage from './pages1/404';
import OrdersPage from './pages1/orders';
import ReportsPage from './pages1';
import SettingsPage from './pages1/settings';
import ThemePage from './pages1/theme';
import CreateCategory from './pages/CreateCategory';
import DisplayCategories from './pages/DisplayCategories';
import EditCategory from './pages/EditCategory';
import CreateProduct from './pages/CreateProduct';
import DisplayProducts from './pages/DisplayProducts';

export const routes = [
  {
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        index: true,
        element: <ReportsPage />
      },
      {
        path: 'add-category',
        element: <CreateCategory />
      },
      {
        path: 'categories',
        element: <DisplayCategories />
      },
      {
        path: 'edit-category/:id',
        element: <EditCategory />
      },
      {
        path: 'add-product',
        element: <CreateProduct />
      },
      {
        path: 'products',
        element: <DisplayProducts />
      },
      //old routes
      {
        path: 'orders',
        element: <OrdersPage />
      },
      {
        path: 'settings',
        element: <SettingsPage />
      },
      {
        path: 'theme',
        element: <ThemePage />
      },
      {
        path: 'icons',
        element: <IconsPage />
      }
    ]
  },
  {
    path: '404',
    element: <NotFoundPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];
