import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Search from './pages/Search';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/search', element: <Search /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
