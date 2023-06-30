import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const BlogForm = ({ editing }) => {
  const { id } = useParams(); //url에서 parameter(id번호를) 추출해온다.
  // console.log(id); //useparams를 이용해서 상세페이지를 만들 수 있다.
  const navi = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState();
  const onSubmit = () => {
    axios
      .post("http://localhost:3009/posts", {
        title: title,
        body: body,
        createdAt: Date.now(),
      })
      .then(() => {
        navi("/blogs");
      });
  };
  // useEffect(() => {
  //   // console.log(id);
  //   axios.get(`http://localhost:3009/posts/${id}`).then((res) => {
  //     // console.log(res.data);
  //     setTitle(res.data.title);
  //     setBody(res.data.body);
  //   });
  // }, []); //BlogForm 컴포넌트가 실행될때 한번만 실행해라.

  useEffect(() => {
    if (editing) {
      axios.get(`http://localhost:3009/posts/${id}`).then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setBody(res.data.body);
      });
    }
  }, [editing, id]);

  return (
    <div className="container">
      <h2>{editing ? "Edit" : "Create"} a blog post</h2>
      <div className="mb-3">
        <label className="form-label fs-5">⚜TITLE⚜</label>
        <input
          value={title}
          className="form-control"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label fs-5">◼BODY</label>
        <textarea
          value={body}
          className="form-control"
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
