import router from "./routers/Index";
import { RouterProvider, useNavigate } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
