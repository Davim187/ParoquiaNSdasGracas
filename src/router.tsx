import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Pastorais } from "./pages/pastorais";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pastorais" element={<Pastorais />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
