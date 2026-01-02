import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Simulation from "./Simulation";
import Video1 from "./Video1";
import Video2 from "./Video2";
import Video3 from "./Video3";

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
            marginRight: 12,
            fontWeight: 700,
            fontSize: "18px",
            color: "#555",
            textDecoration: "none",
          }}
        >
          Simulation
        </NavLink>

        <NavLink
          to="/video1"
          style={{
            marginRight: 12,
            fontWeight: 700,
            fontSize: "18px",
            color: "#555",
            textDecoration: "none",
          }}
        >
          1. SUMO-Video
        </NavLink>

        <NavLink
          to="/video2"
          style={{
            marginRight: 12,
            fontWeight: 700,
            fontSize: "18px",
            color: "#555",
            textDecoration: "none",
          }}
        >
          2. SUMO-Video
        </NavLink>

        <NavLink
          to="/video3"
          style={{
            marginRight: 12,
            fontWeight: 700,
            fontSize: "18px",
            color: "#555",
            textDecoration: "none",
          }}
        >
          3. SUMO-Video
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/video1" element={<Video1 />} />
        <Route path="/video2" element={<Video2 />} />
        <Route path="/video3" element={<Video3 />} />
      </Routes>
    </BrowserRouter>
  );
}

