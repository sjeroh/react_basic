import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const ListPage = () => {
  const navi = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  // 배열로 가지고오려고 [] 넣기
  const getPost = () => {
    axios.get("http://localhost:3009/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
      setLoading(false);
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

  const renderBlogList = () => {
    if (loading) {
      return <LoadingSpinner />;
    }

    if (posts.length === 0) {
      return <div>blog post가 발견되지 않았습니다.</div>;
    }
    return posts.map((ps) => {
      return (
        <Card
          key={ps.id}
          onClick={() => {
            navi(`/blogs/${ps.id}`);
          }}
        >
          <div>
            {ps.title} : {ps.body}
          </div>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              deleteBlog(e, ps.id);
            }}
          >
            delete
          </button>
        </Card>
      );
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

      {renderBlogList()}
    </div>
  );
};

export default ListPage;
