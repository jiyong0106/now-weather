import Header from "../header/header"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout