import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/Router.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./provider/AuthProvider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </QueryClientProvider>
  </AuthProvider>
);
