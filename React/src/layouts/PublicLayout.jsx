import { Outlet } from "react-router"
import Navbar from "../components/Navbar"


const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <div className="page-render-box">
        <Outlet />
      </div>
    </>
  )
}

export default PublicLayout
