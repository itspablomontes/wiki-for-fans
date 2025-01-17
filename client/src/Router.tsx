import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import CharacterPage from "./routes/CharacterPage";
import CharactersList from "./routes/CharactersList";
import HousesList from "./routes/HousesList";
import HousePage from "./routes/HousePage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterPage />} />
        <Route path="/characters-list" element={<CharactersList />} />
        <Route path="/house/:id" element={<HousePage />} />
        <Route path="/houses-list" element={<HousesList />} />
      </Route>
    </Routes>
  );
}
