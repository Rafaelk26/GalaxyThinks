// Import from development
import { RouterProvider } from 'react-router-dom';

// Components
import { router } from '../routes';

// Styles
import './App.css'

export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
