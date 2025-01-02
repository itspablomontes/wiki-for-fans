import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import Character from "./routes/Character";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
      </Route>
    </Routes>
  );
}
