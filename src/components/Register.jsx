import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration submitted", { email, password, confirmPassword });
  };

  const styles = {
    container: {
      width: "100%",
      maxWidth: "400px",
      margin: "40px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      marginBottom: "5px",
      fontWeight: "bold",
    },
    input: {
      padding: "8px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "3px",
    },
    button: {
      padding: "10px",
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "3px",
      cursor: "pointer",
    },
    link: {
      marginTop: "15px",
      textAlign: "center",
    },
    linkText: {
      color: "#007bff",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Create Account</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="email" style={styles.label}>
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <label htmlFor="password" style={styles.label}>
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <label htmlFor="confirm-password" style={styles.label}>
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Create Account
        </button>
      </form>
      <div style={styles.link}>
        <a href="/login" style={styles.linkText}>
          Already have an account? Sign in here.
        </a>
      </div>
    </div>
  );
};

export default Register;
