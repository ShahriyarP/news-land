import React from "react";
import {
  getDataPosts,
  allDataPosts,
  allDataIsLoading,
  /* showErrorPosts, */
} from "../stateManagement/posts/postSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import PostElement from "./PostElement";
import Loading from "../component/loading/Loading";
import { nanoid } from "@reduxjs/toolkit";
import Header from "./Header";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(allDataPosts);
  const postsIsLoaing = useSelector(allDataIsLoading);
  /* const showError = useSelector(showErrorPosts); */

  useEffect(() => {
    dispatch(getDataPosts());
  }, []);

  return (
    <>
      {postsIsLoaing && <Loading />}
      {!postsIsLoaing && <Header />}
      {/* {showError} */}
      {posts.map((item) => (
        <PostElement key={nanoid()} item={item} />
      ))}
    </>
  );
};

export default Posts;
