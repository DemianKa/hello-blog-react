import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './feature/home/page/HomePage';
import { MemberProvider } from './app/auth/MemberContext';

function App() {
  return (
    <MemberProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </MemberProvider>
  );
}

export default App;
