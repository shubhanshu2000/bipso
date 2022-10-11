import { DataContextProvider } from "./components/context_reducers/Context";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Nav from "./components/Nav";
import ErrorPage from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/details:id",
    element: <Details />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Nav />
        <RouterProvider router={router} />
      </DataContextProvider>
    </div>
  );
}

export default App;
