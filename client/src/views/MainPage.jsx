import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainPage = () => {
  return (
    <>
      <div className="flex">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default MainPage;
