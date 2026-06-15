import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroBg from "../assets/hero-bg.png";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          minHeight: "90vh",
          backgroundImage: `linear-gradient(
            rgba(0,0,0,0.55),
            rgba(0,0,0,0.55)
          ), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            color: "white",
            marginBottom: "20px",
          }}
        >
          Become a Volunteer
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
            color: "white",
            maxWidth: "800px",
            marginBottom: "30px",
          }}
        >
          Join NayePankh Foundation and help create a positive impact in
          education, awareness, and community development.
        </p>

        <Link to="/register">
          <button
            style={{
              padding: "14px 28px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Register Now
          </button>
        </Link>
      </section>

      {/* About Section */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2>About NayePankh Foundation</h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "20px auto",
            lineHeight: "1.8",
          }}
        >
          NayePankh Foundation is dedicated to empowering communities through
          education, social awareness, and volunteer-driven initiatives. We
          believe that even small actions can create meaningful change.
        </p>
      </section>

      {/* Impact Section */}
      <section
        style={{
          padding: "60px 20px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Our Impact</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          {[
            { number: "5000+", label: "Lives Impacted" },
            { number: "300+", label: "Volunteers" },
            { number: "50+", label: "Campaigns" },
            { number: "20+", label: "Cities" },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #333",
                borderRadius: "12px",
                padding: "25px",
                width: "180px",
                textAlign: "center",
              }}
            >
              <h2>{item.number}</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Volunteer */}
      <section
        style={{
          padding: "60px 20px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          Why Volunteer With Us?
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          {[
            "Gain Experience",
            "Develop Leadership",
            "Build Your Network",
            "Create Social Impact",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #333",
                borderRadius: "12px",
                padding: "25px",
                width: "220px",
                textAlign: "center",
              }}
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h2>Ready to Make a Difference?</h2>

        <p>Become part of a growing volunteer community today.</p>

        <Link to="/register">
          <button
            style={{
              padding: "14px 28px",
              marginTop: "20px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Become a Volunteer
          </button>
        </Link>
      </section>

      <Footer />
    </>
  );
}

export default Home;