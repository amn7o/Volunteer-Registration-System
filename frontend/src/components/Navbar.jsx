import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <h2>NayePankh Foundation</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Home
        </Link>

        <Link
          to="/register"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Volunteer
        </Link>

        <Link
          to="/dashboard"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;