import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from "react-redux"
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          {/* private route */}
          <Route path='' element={<PrivateRoute />}>
          <Route path='/profile' element={<ProfileScreen />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
  </Provider> 
);
