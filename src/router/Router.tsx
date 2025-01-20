import ExceptLayout from '@components/except/exceptLayout/ExceptLayout';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from 'src/App';
import PrivateRoute from 'src/router/PrivateRoute';

const HomePage = lazy(() => import('@pages/homePage/HomePage'));
const SearchPage = lazy(() => import('@pages/searchPage/SearchPage'));
const ErrorPage = lazy(() => import('@pages/ErrorPage'));
const FilterPage = lazy(() => import('@pages/filterPage/FilterPage'));
const MyPage = lazy(() => import('@pages/myPage/MyPage'));
const OnboardingPage = lazy(() => import('@pages/onboardingPage/OnboardingPage'));
const WelcomePage = lazy(() => import('@pages/welcomePage/WelcomePage'));
const WishListPage = lazy(() => import('@pages/wishList/WishListPage'));
const LoginPage = lazy(() => import('@pages/loginPage/LoginPage'));

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
        path: 'filter',
        element: <FilterPage />,
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
        path: 'wishList',
        element: (
          <PrivateRoute redirectPath="/login" state={{ type: 'wish' }}>
            <WishListPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'onboarding',
        element: <OnboardingPage />,
      },
      {
        path: 'welcome',
        element: <WelcomePage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

const Router = () => (
  <Suspense fallback={<ExceptLayout type="loading" />}>
    <RouterProvider router={router} />
  </Suspense>
);

export default Router;
