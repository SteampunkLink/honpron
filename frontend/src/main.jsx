import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import store from "./store";
import App from "./App.jsx";
import "./index.scss";
import HomeScreen from "./screens/HomeScreen";
import SeriesIndexScreen from "./screens/SeriesIndexScreen";
import SeriesScreen from "./screens/SeriesScreen";
import EpisodeScreen from "./screens/EpisodeScreen";
import RankScreen from "./screens/RankScreen";
import FaqsScreen from "./screens/FaqsScreen";
import ScratchCardScreen from "./screens/ScratchCardScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/series" element={<SeriesIndexScreen />} />
      <Route path="/series/:seriesName" element={<SeriesScreen />} />
      <Route path="/episode/:show/:epNum" element={<EpisodeScreen />} />
      <Route path="/ranks" element={<RankScreen />} />
      <Route path="/faqs" element={<FaqsScreen />} />
      <Route path="/scratch" element={<ScratchCardScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
