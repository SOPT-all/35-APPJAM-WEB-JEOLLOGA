import LoginPage from '@pages/loginPage/LoginPage';
import WishListPage from '@pages/wishList/WishListPage';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from 'src/App';
import PrivateRoute from 'src/router/PrivateRoute';

const HomePage = lazy(() => import('@pages/homePage/HomePage'));
const SearchPage = lazy(() => import('@pages/searchPage/SearchPage'));
const ErrorPage = lazy(() => import('@pages/ErrorPage'));
const MyPage = lazy(() => import('@pages/myPage/MyPage'));
const WishPage = lazy(() => import('@pages/WishPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'myPage',
        element: (
          <PrivateRoute redirectPath="/login" state={{ type: 'my' }}>
            <MyPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'wish',
        element: (
          <PrivateRoute redirectPath="/login" state={{ type: 'wish' }}>
            <WishPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'wishList',
        element: <WishListPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

// TODO: 로딩 화면 추가
const Router = () => (
  <Suspense fallback={<div>로딩 화면 추가</div>}>
    <RouterProvider router={router} />
  </Suspense>
);

export default Router;
