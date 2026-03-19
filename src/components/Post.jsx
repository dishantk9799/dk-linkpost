import React from 'react'
import LeftSide from '../utils/LeftSide'
import RightSide from '../utils/RightSide'
import { useForm } from 'react-hook-form'

const Post = ({ setToggle, setPostData, editPost, setEditPost }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: editPost || {}
  });

  const onHandle = (data) => {
    if (editPost) {
      setPostData(prev => prev.map(item => (item === editPost ? data : item)));
      setEditPost(null);
    } else {
      setPostData(prev => [...prev, data]);
    }

    setToggle(prev => !prev);
  };


  return (
    <div className='w-full h-[calc(100vh-4rem)] flex justify-between px-4'>
      {/* LEFTSIDE */}
      <LeftSide />

      {/* CREATE POST*/}
      <div className='lg:flex-2 w-full overflow-auto justify-center flex flex-col gap-5 mt-2 md:border-x-2 border-x-zinc-600 p-2'>
        <form onSubmit={handleSubmit(onHandle)} className="w-full  bg-zinc-900 p-4 rounded-lg flex flex-col gap-4">

          {/* TITLE */}
          <h2 className="text-2xl font-semibold secondary-text">Create Post</h2>

          {/* NAME AND ROLE */}
          <div className="flex md:items-end flex-col md:flex-row gap-3">

            {/* NAME */}
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
              className="flex-1 p-2 rounded bg-zinc-800 secondary-text outline-none focus:ring-2 focus:ring-violet-500"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">
                {errors.name.message}
              </p>
            )}

            {/* ROLE */}
            <select
              {...register("role", { required: "Role is required" })}
              className="flex-1 p-2 rounded bg-zinc-800 secondary-text outline-none focus:ring-2 focus:ring-violet-500"
            >
              <option value="">Select Role</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>DevOps Engineer</option>
              <option>Data Scientist</option>
              <option>QA Analyst</option>
              <option>Other</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-xs ">
                {errors.role.message}
              </p>
            )}

          </div>

          {/* USER IMAGE */}
          <div>
            <input
              type="text"
              {...register("userImg", { required: "User image is required" })}
              placeholder="User Image URL"
              className="w-full p-2 rounded bg-zinc-800 secondary-text outline-none focus:ring-2 focus:ring-violet-500"
            />
            {errors.userImg && (
              <p className="text-red-500 text-xs">
                {errors.userImg.message}
              </p>
            )}

          </div>

          {/* POST TEXT */}
          <div>
            <textarea
              placeholder="What's on your mind?"
              {...register("text",
                {
                  required: "Post text is required",
                  validate: (value) => {
                    const wordCount = value.trim().split(/\s+/).length;

                    if (wordCount < 5) {
                      return "Minimum 5 words required";
                    }
                    if (wordCount > 200) {
                      return "Maximum 200 words allowed";
                    }
                    return true;
                  }
                })}
              rows="8"
              className="w-full p-2 rounded bg-zinc-800 secondary-text outline-none resize-none focus:ring-2 focus:ring-violet-500"
            ></textarea>
            {errors.text && (
              <p className="text-red-500 text-xs">
                {errors.text.message}
              </p>
            )}
          </div>

          {/* POST IMAGE */}
          <input
            type="text"
            {...register("postImg")}
            placeholder="Post Image URL"
            className="w-full p-2 rounded bg-zinc-800 secondary-text outline-none focus:ring-2 focus:ring-violet-500"
          />

          {/* BUTTON */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 accent-bg accent-bg-hover rounded-full secondary-text font-medium transition duration-200"
            >
              {editPost ? "Update post" : "Create post"}
            </button>
          </div>

        </form>
      </div>

      {/* RIGHTSIDE */}
      <RightSide />
    </div>
  )
}

export default Post
