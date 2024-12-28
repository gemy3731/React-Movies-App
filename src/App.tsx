import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movies from "./components/Movies/Movies";
import TVShows from "./components/TVShows/TVShows";
import Favorite from "./components/Favourite/Favourite";
import Watchlist from "./components/Watchlist/Watchlist";
import MoviesDetails from "./components/Details/MoviesDetails";
import TVDetails from "./components/Details/TVDetails";
import CreateToken from "./components/Session/CreateToken";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes";
import Favourite from "./components/Favourite/Favourite";
import ProtectedRoutesSession from "./protectedRoutes/ProtectedRoutesSession";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "tvShows", element: <TVShows /> },
      {
        path: "favourite",
        element: (
          <ProtectedRoutes>
            <Favourite />
          </ProtectedRoutes>
        ),
      },
      {
        path: "watchlist",
        element: (
          <ProtectedRoutes>
            <Watchlist />
          </ProtectedRoutes>
        ),
      },
      { path: "moviesDetails/:id", element: <MoviesDetails /> },
      { path: "tvDetails/:id", element: <TVDetails /> },
      {
        path: "session",
        element: (
          <ProtectedRoutesSession>
            <CreateToken />
          </ProtectedRoutesSession>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster />
      </Provider>
    </>
  );
}

export default App;
