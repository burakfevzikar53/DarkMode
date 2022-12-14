import "./DarkMode.css";
//import Form from "./components/Form";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
//import App from "./App.js"
import React from 'react';

export const ThemeContext = createContext(null);

function DarkMode() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default DarkMode;