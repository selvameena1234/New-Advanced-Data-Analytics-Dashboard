import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PieChart from "../components/PieChart";
import React, { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    setError("");

    API.get("data/")
      .then((res) => {
        console.log("API DATA:", res.data);

        setData(res.data);   // ✅ correct for array response
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err);

        setError("Failed to load data. Check backend/API.");
        setLoading(false);
      });
  };

  // ✅ Loading UI
  if (loading) {
    return (
      <div className="container mt-4">
        <h3>Loading dashboard data...</h3>
      </div>
    );
  }

  // ✅ Error UI
  if (error) {
    return (
      <div className="container mt-4">
        <h3 style={{ color: "red" }}>{error}</h3>
        <button className="btn btn-primary mt-2" onClick={fetchData}>
          Retry
        </button>
      </div>
    );
  }

  return (
  <div>

    {/* NAVBAR */}
    <Navbar />

    <div className="container mt-4">

      <h2>Dashboard</h2>

      {/* Summary */}
      <div className="summary">
  <div className="card">
    <h3>Total Records</h3>
    <h2>{data.length}</h2>
  </div>
</div>

      {/* TABLE */}
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.value}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* PIE CHART */}
      <h3 className="mt-4">Analytics</h3>
      {data.length > 0 && <PieChart data={data} />}

    </div>

    {/* FOOTER */}
    <Footer />

  </div>
)}
export default Dashboard;