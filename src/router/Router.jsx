import { createBrowserRouter } from 'react-router-dom';
import hom
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'aboutus',
        element: <AboutUs />,
      },
    ],
  },
]);
