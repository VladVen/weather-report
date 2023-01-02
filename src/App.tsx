import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { routes } from "./routes/Router";
import { Paper } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className={"header"}>
        <a href={"https://github.com/VladVen"}>VladVen</a>
      </header>
      <Paper className={"paper"}>
        <Routes>
          {routes.map(({ path, element }, key) => {
            return <Route path={path} element={element} key={key} />;
          })}
        </Routes>
      </Paper>
      <footer className={"footer"}>2023</footer>
    </div>
  );
}

export default App;
