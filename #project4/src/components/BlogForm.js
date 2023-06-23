import React from "react";
import { useState } from "react";
import axios from "axios";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState();
  const onSubmit = () => {
    axios.post("http://localhost:3009/posts", {
      title: title,
      body: body,
    });
  };
  return (
    <div className="container">
      <div class="mb-3">
        <label className="form-label fs-5">⚜TITLE⚜</label>
        <input
          value={title}
          class="form-control"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div class="mb-3">
        <label className="form-label fs-5">◼BODY</label>
        <textarea
          value={body}
          class="form-control"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>

      <button onClick={onSubmit} className="btn btn-secondary">
        POST
      </button>
    </div>
  );
};

export default BlogForm;
