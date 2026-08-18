import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />},
      { path: "about", element: <About />},
      { path: "products", element: <Products />},
      { path: "products/:productId", element: <ProductDetail />},
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />;
}