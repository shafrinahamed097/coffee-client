import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee';
import CoffeeUpdate from './components/CoffeeUpdate';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path: "addCoffee",
    element: <AddCoffee />
  },
  {
    path: 'updateCoffee',
    element: <CoffeeUpdate />
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
