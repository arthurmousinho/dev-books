import "./global.scss"

import { RouterProvider } from "react-router-dom"
import { routers } from "./routes"

export function App() {
  return (
    <RouterProvider router={routers}></RouterProvider>
  )
}