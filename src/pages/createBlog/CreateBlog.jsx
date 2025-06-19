import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { createBlog } from "../../store/slice/blogSlice";
import SectionWrapper from "../../component/SectionWrapper";

const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  content: z.string().min(20, "Content must be at least 20 characters."),
});

export default function CreateBlog() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(blogSchema),
  });

  const onSubmit = (data) => {
    dispatch(createBlog(data));
    reset();
  };

  return (
    <SectionWrapper className="mt-10">
      <div className="max-w-3xl mx-auto bg-brand-light p-6 sm:p-8 rounded-xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-semibold text-brand-primary mb-6 text-center">
          Create Blog Post
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div>
            <label className="block text-brand-primary mb-1">Title</label>
            <input
              type="text"
              {...register("title")}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.title ? "border-red-500" : "border-brand-secondary"
              }`}
              placeholder="Enter blog title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-brand-primary mb-1">Description</label>
            <textarea
              rows="3"
              {...register("description")}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.description ? "border-red-500" : "border-brand-secondary"
              }`}
              placeholder="Short description of the blog post"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
            )}
          </div>

          <div>
            <label className="block text-brand-primary mb-1">Content</label>
            <textarea
              rows="6"
              {...register("content")}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.content ? "border-red-500" : "border-brand-secondary"
              }`}
              placeholder="Write your blog content here..."
            ></textarea>
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-brand-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
