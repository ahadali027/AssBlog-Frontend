import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateBlog from "./pages/createBlog/CreateBlog";
import BlogDetail from "./pages/blog/BlogDetail";
import Navbar from "./component/header/Navbar";
import Footer from "./component/footer/Footer";
import { useDispatch } from "react-redux";
import { fetchBlogs } from "./store/slice/blogSlice";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </>
  );
}

export default App;
