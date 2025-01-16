import NaverMap from '@components/templeDetail/naverMap/NaverMap';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <main style={{ margin: '0 auto', width: '37.5rem', minHeight: '100vh' }}>
      <Outlet />
      <NaverMap />
    </main>
  );
};

export default App;
