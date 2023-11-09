import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import MainPage from './pages/MainPage';
import DebuggerDuck from './pages/DebuggerDuck';
import Login from './pages/Login';
import Register from './pages/Register';
import AddDuckLayout from './pages/AddDuckLayout';
import AddDuck from './pages/AddDuck';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='duck/:duckId' element={<DebuggerDuck />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='addDuck' element={<AddDuckLayout />}>
          <Route index element={<AddDuck />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
