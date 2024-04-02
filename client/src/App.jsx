import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Home, ChatPage } from "./pages/index"
import { useEffect, useState } from "react";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" >
        <Route path="" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
