import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";

const ListPage = () => {
  const navi = useNavigate();
  const [posts, setPosts] = useState([]);
  // 배열로 가지고오려고 [] 넣기
  const getPost = () => {
    axios.get("http://localhost:3009/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  };
  useEffect(() => {
    getPost();
  }, []);
  const deleteBlog = (e, id) => {
    e.stopPropagation();
    axios.delete("http://localhost:3009/posts/" + id).then(() => {
      setPosts((prevPost) => {
        return prevPost.filter((pos) => {
          return pos.id !== id;
        });
      });
    });
  };
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="mt-3">Blogs</h2>
        <Link to={"/blogs/create"} className="btn btn-warning">
          Create New
        </Link>
      </div>

      {posts.map((ps) => {
        return (
          <Card
            key={ps.id}
            onClick={() => {
              navi("/blogs/edit");
            }}
          >
            <div>
              {ps.title} : {ps.body}
            </div>
            <button
              onClick={(e) => {
                deleteBlog(e, ps.id);
              }}
            >
              button
            </button>
          </Card>
        );
      })}
    </div>
  );
};

export default ListPage;
