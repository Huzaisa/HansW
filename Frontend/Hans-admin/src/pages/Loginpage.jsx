import React from "react";
import logoHans from "../assets/logo.png"

const LoginPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      {/* Bagian Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
        <div style={{ textAlign: "center"}}>
          <img
            src={logoHans}
            alt="Logo"
            style={{ width: "550px", height: "400px" }}
          />
        </div>

        {/* Form Login */}
        <div
          style={{
            width: "300px",
            padding: "30px",
            backgroundColor: "#D3D3D3",
            borderRadius: "10px"
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontFamily: "Arial, sans-serif",
              fontSize: "30px",
              fontWeight: "bold",
              background: "none",
              backgroundColor: "#D3D3D3",
              color: "black"
            }}
          >
            LOGIN
          </h2>
          <form style={{background: "none"}}>
            <div style={{ marginBottom: "15px", background: "none" }}>
              <label
                htmlFor="username"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "Arial, sans-serif",
                  background: "none",
                  backgroundColor: "#D3D3D3",
                  color: "black"
                }}
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  background: "none",
                  backgroundColor: "white",
                  color: "black"
                }}
              />
            </div>
            <div style={{ marginBottom: "20px", background: "none" }}>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "Arial, sans-serif",
                  background: "none",
                  backgroundColor: "#D3D3D3",
                  color: "black"
                }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  background: "none",
                  backgroundColor: "white",
                  color: "black"
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "white",
                color: "black",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif",
                variant: "light"
              }}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
