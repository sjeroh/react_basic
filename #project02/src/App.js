import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            );
          })}
        </Routes>
      </div>
    </>
  );
}

export default App;
