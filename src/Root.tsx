import React, { Suspense } from "react";
import { Outlet } from "@tanstack/react-router";

import "./index.css";
import { Navbar } from "./Navbar";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );

export function Root() {
  return (
    <>
      <Navbar />
      <hr />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  );
}
