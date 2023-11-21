import "./App.css";
import PublicRoutes from "../src/routes/PublicRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <Toaster/>
      <PublicRoutes />
    </>
  );
}

export default App;
