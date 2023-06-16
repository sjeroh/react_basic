import React from "react";
import { useState } from "react";
import axios from "axios";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = () => {
    axios.post("http://localhost:3008/posts", {
      title: title,
      body: body,
    });
  };
  return (
    <div className="container">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
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
          className="form-control"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          rows={10}
        />
      </div>
      <button className="btn btn-success" onClick={onSubmit}>
        Post
      </button>
    </div>
  );
};

export default BlogForm;
