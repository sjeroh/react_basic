import "./App.css";
import { Route, Routes } from "react-router";
import routes from "./routes";
import Nav from "./components/Nav";

function App() {
  // let number= 1;
  // function increate() {
  //   numSet(num + 2);
  // number = number +2;
  // console.log()

  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          {routes.map((rou) => {
            return (
              <Route
                key={rou.path}
                path={rou.path}
                element={rou.component}
              ></Route>
            );
          })}
        </Routes>
      </div>
    </>
  );
}

export default App;
