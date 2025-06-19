import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SectionWrapper from "../../component/SectionWrapper";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogById } from "../../store/slice/blogSlice";

function BlogDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { blog, loading } = useSelector((state) => state.blogs);
  const blogData = blog?.data;

  useEffect(() => {
    if (id) {
      dispatch(fetchBlogById(id));
    }
  }, [id, dispatch]);

  if (loading) {
    return (
      <SectionWrapper>
        <p className="text-brand-secondary text-lg">Loading...</p>
      </SectionWrapper>
    );
  }

  if (!blogData) {
    return (
      <SectionWrapper>
        <p className="text-brand-muted text-lg">No blog found for this ID.</p>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper>
      <Link to="/" className="text-brand-primary underline mb-4 inline-block">
        ← Back to Posts
      </Link>
      <h1 className="text-3xl font-bold text-brand-primary mb-4">
        {blogData.title}
      </h1>
      <p className="text-brand-secondary text-lg mb-4">
        {blogData.description}
      </p>
      <div className="text-base text-brand-dark leading-relaxed">
        {blogData.content}
      </div>
    </SectionWrapper>
  );
}

export default BlogDetail;
