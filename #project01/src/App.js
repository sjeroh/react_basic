import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = () => {
    axios.post("http://localhost:3004/posts", {
      title: title,
      body: body,
    });
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Body</label>
          <textarea
            type="text"
            className="form-control"
            rows={10}
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-info" onClick={onSubmit}>
          Post
        </button>
      </div>
    </>
  );
}

export default App;
