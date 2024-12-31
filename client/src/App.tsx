import { BrowserRouter } from "react-router-dom";
import "./assets/fonts.css";
import { Router } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <div className=" bg-zinc-900 min-h-screen">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
