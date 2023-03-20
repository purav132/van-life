import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";
import "./server";
import Vans, { loader as vansLoader } from "./pages/van/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/van/VanDetail";
import Layout from "./components/Layout";
import Dashboard, { loader as dashboardLoader } from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as hostVansLoader } from "./pages/host/HostVans";
import HostVanDetail, {
  loader as hostVansDetailsLoader,
} from "./pages/host/HostVanDetail";
import HostVanInfo from "./pages/host/HostVanInfo";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVanPhotos from "./pages/host/HostVanPhotos";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login, { action as loginAction } from "./pages/Login";
import AuthRequired from "./components/AuthRequired";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} action={loginAction} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        errorElement={<Error />}
        loader={vanDetailLoader}
      />

      <Route element={<AuthRequired />}>
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} loader={dashboardLoader} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route
            path="vans"
            element={<HostVans />}
            errorElement={<Error />}
            loader={hostVansLoader}
          />
          <Route
            path="vans/:id"
            element={<HostVanDetail />}
            errorElement={<Error />}
            loader={hostVansDetailsLoader}
          >
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
