import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movies from "./components/Movies/Movies";
import TVShows from "./components/TVShows/TVShows";
import Favorite from "./components/Favorite/Favorite";
import Watchlist from "./components/Watchlist/Watchlist";
import MoviesDetails from "./components/Details/MoviesDetails";
import TVDetails from "./components/Details/TVDetails";
import CreateToken from "./components/Session/CreateToken";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { Toaster } from "react-hot-toast";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "tvShows", element: <TVShows /> },
      { path: "favorite", element: <Favorite /> },
      { path: "watchlist", element: <Watchlist /> },
      { path: "moviesDetails/:id", element: <MoviesDetails /> },
      { path: "tvDetails/:id", element: <TVDetails /> },
      { path: "session", element: <CreateToken /> },
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
