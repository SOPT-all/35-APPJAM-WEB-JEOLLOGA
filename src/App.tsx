import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <main style={{ margin: '0 auto' }}>
      <Outlet />
    </main>
  );
};

export default App;
