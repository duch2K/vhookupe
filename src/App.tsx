// import 'antd/dist/antd.css';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './layout';
import { Home } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="feed" element={<Home />} />
        <Route path="profile" element={<Home />} />
        <Route path="messages" element={<Home />} />
        <Route path="friends" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
