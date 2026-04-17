import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2>Analytics Dashboard</h2>
      <div>
        <a href="#">Dashboard</a>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#1f2937",
    color: "white",
  },
};

export default Navbar;