// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'; // Import index.css here

import App from './App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Player from './components/Player.jsx';
import Trophy from './components/Trophy.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'player', element: <Player /> },
      { path: 'trophy', element: <Trophy /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
