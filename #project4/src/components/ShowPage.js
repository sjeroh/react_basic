import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router-dom";

const ShowPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  console.log(id);
  const [post, setPost] = useState(null);
  const getPost = () => {
    axios.get(`http://localhost:3009/posts/${id}`).then((res) => {
      console.log(res.data);
      setPost(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getPost(id);
  }, [id]);
  if (loading) {
    return <LoadingSpinner />;
  }
  const printDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
      <h1>{post.title}</h1>
      <Link to={`/blogs/${id}/edit`} className="btn btn-secondary">Edit</Link>
      </div>
      <div>{printDate(post.createdAt)}</div>
      <p>{post.body}</p>
    </div>
  );
};

export default ShowPage;
