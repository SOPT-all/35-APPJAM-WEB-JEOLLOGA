import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <main style={{ margin: '0 auto', width: '37.5rem' }}>
      <Outlet />
    </main>
  );
};

export default App;
