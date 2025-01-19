import WishListPage from '@pages/WishListPage';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from 'src/App';

const HomePage = lazy(() => import('@pages/HomePage'));
const SearchPage = lazy(() => import('@pages/SearchPage'));
const ErrorPage = lazy(() => import('@pages/ErrorPage'));
const MyPage = lazy(() => import('@pages/myPage/MyPage'));

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
        element: <MyPage />,
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
