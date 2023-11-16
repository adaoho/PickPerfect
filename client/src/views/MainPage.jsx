import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryBar from "../components/CategoryBar";

const MainPage = () => {
  return (
    <>
      <div>
        <Navbar />
        {/* <CategoryBar /> */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
