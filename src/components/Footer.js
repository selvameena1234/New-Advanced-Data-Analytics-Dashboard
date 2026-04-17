import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2026 Analytics Dashboard</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "10px",
    marginTop: "20px",
    background: "#1f2937",
    color: "white",
  },
};

export default Footer;