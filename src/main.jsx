import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Categories from './components/Categories/Categories.jsx';
import Meals from './components/Meals/Meals.jsx';
import MealDetails from './components/MealDetails/MealDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/foods',
        element: <Categories />,
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php') 
      },
      {
        path: '/meals',
        element: <Meals />,
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      },
      {
        path: 'meals/:mealsId',
        element: <MealDetails />,
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=${params.meals}`)
      }
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
