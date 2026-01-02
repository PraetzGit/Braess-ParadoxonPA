import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Simulation from "./Simulation";

export default function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          padding: "12px",
          background: "#f0f0f0",
          borderBottom: "1px solid #ccc",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        <NavLink
          to="/"
          end
          style={{
            marginRight: 12,
            fontWeight: 700,
            fontSize: "18px",
            color: "#555",
            textDecoration: "none",
          }}
        >
          Startseite
        </NavLink>

        <NavLink
          to="/simulation"
          style={{
            fontWeight: 700,
            fontSize: "18px",
            color: "#555",
            textDecoration: "none",
          }}
        >
          Simulation
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulation" element={<Simulation />} />
      </Routes>
    </BrowserRouter>
  );
}

