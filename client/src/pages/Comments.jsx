import React, { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import Post from "../components/Post";
import newRequest from "../utils/newRequest";
import { toast, Toaster } from "react-hot-toast";

const Comments = () => {
  const postId = useParams();
  const { currentUser } = useSelector((state) => state.user);

  const [post, setPost] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await newRequest.get(`posts/${postId.id}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
      }
    };

    fetchPost();
  }, [postId]);

  const [desc, setDesc] = useState("");

  const handleCreateComment = async () => {
    try {
      await newRequest.post(`comments/`, {
        postId: postId.id,
        desc,
      });
      toast.success("Comment created successfully!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setDesc("");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const [allComments, setAllComments] = useState([]);
  useEffect(() => {
    const fetchAllComments = async () => {
      try {
        const res = await newRequest.get(`comments/${postId.id}`);
        setAllComments(res.data);
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
      }
    };
    fetchAllComments();
  }, [postId.id]);

  return (
    <div className="flex-[2] border-r-2 border-gray-500 dark:text-white py-4">
      <Post post={post} />

      <div className="px-4 py-1.5 rounded-md">
        <div className="flex gap-3 px-4 bg-gray-100 dark:bg-[#1f2937] rounded-md py-2">
          <div className="w-11 h-11 mt-5">
            <img
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png"
              alt=""
              className="object-cover border-2 border-black rounded-full dark:border-white"
            />
          </div>

          <div className="flex p-5 rounded-md flex-col gap-2 w-full">
            <div className="flex justify-between items-center gap-2">
              <div className="flex gap-2">
                <span className="dark:text-white">{currentUser?.username}</span>
                <span className="dark:text-white">{currentUser?.handle}</span>
              </div>
            </div>

            <div className="relative">
              <textarea
                id=""
                rows="2"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                placeholder="Write your comment here"
                className="w-full rounded-md mt-3 bg-[#e4e4e5] border-gray-500 border dark:bg-[#44688200] dark:text-white text-black px-3 py-1.5 outline-none"
              />
              <button
                onClick={handleCreateComment}
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-1 rounded-full font-medium float-right "
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <Toaster />
      </div>

      {allComments?.map((comment) => (
        <Comment key={comment?._id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
