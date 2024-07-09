import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './feature/home/page/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
