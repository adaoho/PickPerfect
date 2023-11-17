import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryBar from "../components/CategoryBar";
import { FruitMovProvider, FruitProvider, MovementProvider } from "../context";
import pickPerfectApi from "../config";

const MainPage = () => {
  return (
    <>
      <div>
        <MovementProvider>
          <FruitMovProvider>
            <FruitProvider>
              <Navbar />
              {/* <CategoryBar /> */}
              <Outlet />
              <Footer />
            </FruitProvider>
          </FruitMovProvider>
        </MovementProvider>
      </div>
    </>
  );
};

export default MainPage;
