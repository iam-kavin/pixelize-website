import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/desktopone" style={{ color: "#87CEFA", textDecoration: "none" }}>
            DesktopOne
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/homepage" style={{ color: "#87CEFA", textDecoration: "none" }}>
            HomePage
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/servicepage" style={{ color: "#87CEFA", textDecoration: "none" }}>
            ServicePage
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/workpage" style={{ color: "#87CEFA", textDecoration: "none" }}>
            WorkPage
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/signuppage" style={{ color: "#87CEFA", textDecoration: "none" }}>
            SignUpPage
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
