import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./assets/fonts.css";

function App() {
  return (
    <div className=" bg-zinc-900 min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
