import React, { useEffect, useState } from "react";
import axios from "axios";

const ListPage = () => {
  const [post, setPost] = useState([]); //배열로 받자
  const getPost = () => {
    axios.get("http://localhost:3008/posts").then((res) => {
      console.log(res.data);
      setPost(res.data);
    });
    //.then 함수 : 받아온 데이터를 사용하기 위해서는 axios에서 then함수를 사용한다.
    //데이터를 매개변수로 돌아온다. res변수를 타고 데이터가 들어온다.
    //.then(()=>{})
  };
  useEffect(() => {}, []);
  // [] 의존성 배열이라고 한다.배열이 비어있다면 컴포넌트가 실행될때 딱 한번만 실행된다.
  getPost();
  return (
    <div>
      <h1>Blogs</h1>
      {post.map((post) => {
        return <div key={post.key}>{post.title}</div>;
      })}
    </div>
  );
};

export default ListPage;
