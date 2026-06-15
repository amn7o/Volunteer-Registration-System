import { useEffect, useState } from "react";
import API from "../api";

function Dashboard() {
  const [volunteers, setVolunteers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    try {
      const response = await API.get("/volunteers");
      setVolunteers(response.data);
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  const deleteVolunteer = async (id) => {
    try {
      await API.delete(`/volunteers/${id}`);
      fetchVolunteers();
      alert("Volunteer Deleted Successfully");
    } catch (error) {
      console.log("Delete Error:", error);
      alert("Failed to Delete Volunteer");
    }
  };

  const filteredVolunteers = volunteers.filter(
    (volunteer) =>
      volunteer.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      volunteer.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      volunteer.city
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          marginBottom: "25px",
        }}
      >
        Volunteer Dashboard
      </h1>

      {/* Stats Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
            minWidth: "220px",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <h3>Total Volunteers</h3>
          <p
            style={{
              fontSize: "28px",
              marginTop: "10px",
            }}
          >
            {volunteers.length}
          </p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
            minWidth: "220px",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <h3>Cities Covered</h3>
          <p
            style={{
              fontSize: "28px",
              marginTop: "10px",
            }}
          >
            {
              new Set(
                volunteers.map((v) => v.city)
              ).size
            }
          </p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
            minWidth: "220px",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <h3>Skills Registered</h3>
          <p
            style={{
              fontSize: "28px",
              marginTop: "10px",
            }}
          >
            {
              new Set(
                volunteers.map((v) => v.skills)
              ).size
            }
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name, email or city..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          padding: "12px",
          width: "350px",
          borderRadius: "8px",
          border: "1px solid #475569",
          background: "#1e293b",
          color: "white",
          marginBottom: "25px",
        }}
      />

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#1e293b",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                background: "#334155",
                padding: "14px",
              }}
            >
              Name
            </th>

            <th
              style={{
                background: "#334155",
                padding: "14px",
              }}
            >
              Email
            </th>

            <th
              style={{
                background: "#334155",
                padding: "14px",
              }}
            >
              City
            </th>

            <th
              style={{
                background: "#334155",
                padding: "14px",
              }}
            >
              Skills
            </th>

            <th
              style={{
                background: "#334155",
                padding: "14px",
              }}
            >
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredVolunteers.length > 0 ? (
            filteredVolunteers.map(
              (volunteer) => (
                <tr key={volunteer._id}>
                  <td
                    style={{
                      padding: "12px",
                    }}
                  >
                    {volunteer.name}
                  </td>

                  <td
                    style={{
                      padding: "12px",
                    }}
                  >
                    {volunteer.email}
                  </td>

                  <td
                    style={{
                      padding: "12px",
                    }}
                  >
                    {volunteer.city}
                  </td>

                  <td
                    style={{
                      padding: "12px",
                    }}
                  >
                    {volunteer.skills}
                  </td>

                  <td
                    style={{
                      padding: "12px",
                    }}
                  >
                    <button
                      onClick={() =>
                        deleteVolunteer(
                          volunteer._id
                        )
                      }
                      style={{
                        background: "#ef4444",
                        color: "white",
                        border: "none",
                        padding: "8px 14px",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td
                colSpan="5"
                style={{
                  textAlign: "center",
                  padding: "30px",
                }}
              >
                No volunteers found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;