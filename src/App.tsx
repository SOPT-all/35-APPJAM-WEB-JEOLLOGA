import TempleInfo from '@components/templeDetail/templeInfo/templeInfo';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <main style={{ margin: '0 auto' }}>
      <Outlet />
      <TempleInfo />
    </main>
  );
};

export default App;
