import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../store/slice/blogSlice";

function PostCard() {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector((state) => state.blogs);
  const data = blogs.data;

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <SectionWrapper>
      <h1 className="text-2xl md:text-3xl font-bold text-brand-primary mb-6 text-center md:text-left">
        Latest Blog Posts
      </h1>

      {loading ? (
        <p className="text-brand-secondary text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.length ? (
            data.map((post) => (
              <Link to={`/blog/${post._id}`} key={post._id}>
                <div className="bg-white border border-brand-muted rounded-2xl p-5 shadow-sm hover:shadow-lg transition duration-300 ease-in-out h-full flex flex-col justify-between">
                  <h2 className="text-lg md:text-xl font-semibold text-brand-primary mb-2 line-clamp-1">
                    {post.title}
                  </h2>
                  <p className="text-sm md:text-base text-brand-secondary line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-brand-muted text-center col-span-full">
              No blog posts found.
            </p>
          )}
        </div>
      )}
    </SectionWrapper>
  );
}

export default PostCard;
