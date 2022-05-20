import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      About this page
      <p>
        <Outlet />
      </p>
      <Link to="homeAbout">About</Link>
      <hr />
      <Link to="dashboardAbout">Dashboard</Link>
    </div>
  );
};

export default About;
