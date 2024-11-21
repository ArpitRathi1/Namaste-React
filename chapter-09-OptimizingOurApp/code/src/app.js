import React, { lazy, Suspense } from "react";
// It means ReactDOM is default export and createRoot is named export
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
// Default import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MealDetails from "./components/MealDetails";
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
// import InstaMart from "./components/InstaMart";

// Lazy loading
const InstaMart = lazy(() => import("./components/InstaMart"));
// Upon on demand render => Upon render => react suspend loading

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // localhost:1234/about/profile
            element: <ProfileClass name="ArpitClass" age={10} />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/meal/:id", // This id is dynamic
        element: <MealDetails></MealDetails>,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
