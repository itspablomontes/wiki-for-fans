import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./assets/fonts.css";

function App() {
  return (
    <div className="w-full h-full absolute bg-zinc-900 text-white">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
