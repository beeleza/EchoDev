import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import MainLayout from './layouts/MainLayout.jsx';
import Homepage from './routes/Homepage.jsx';
import PostListPage from './routes/PostListPage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import RegisterPage from './routes/RegisterPage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Homepage />}/>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="post-list" element={<PostListPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
