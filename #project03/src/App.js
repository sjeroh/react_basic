import "./App.css";
import routes from "./routes";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        {routes.map((rout) => {
          return <Route path={rout.path} element={rout.component} />;
        })}
        {/* <Route path="/" element={<Homepage />} />
        <Route path="/blogs" element={<ListPage />} />
        <Route path="/blogs/create" element={<CreatePage />} />
        <Route path="/blogs/edit" element={<EditPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
