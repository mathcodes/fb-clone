/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import PostModel from "./models/PostModel";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type PostFormProps = {
  isShow: boolean;
  userData?: any;
};

const PostForm: React.FC<PostFormProps> = ({ userData, isShow }) => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const router = useRouter();

  const click = () => {
    router.push({
      pathname: `profile/${user?.uid}`,
      query: {
        /*  userId: user?.uid, */
        userName: user?.displayName?.toString(),
      },
    });
  };

  return (
    <div className="px-4 mt-4 shadow rounded-lg bg-white dark:bg-[#28282B]">
      <div className="flex p-2 space-x-4 border-b border-gray-300 dark:border-dark-third">
        {isShow ? (
          <img
            onClick={click}
            src={user?.photoURL as string}
            alt="Profile picture"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        ) : (
          <img
            src={userData.profileImage}
            alt="Profile picture"
            className="w-10 h-10 rounded-full"
          />
        )}

        <div
          onClick={handleOpen}
          className="flex items-center justify-start flex-1 pl-4 text-lg text-gray-500 bg-gray-100 rounded-full cursor-pointer dark:bg-gray-600 dark:text-gray-300"
        >
          <span>Begin typing here...</span>
        </div>
      </div>
      <div className="flex p-2">
        <motion.div
          onClick={handleOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-1/3 py-2 space-x-2 text-xl text-red-500 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 sm:text-3xl"
        >
          <VideoCallIcon />
          <span className="text-xs font-semibold text-gray-500 sm:text-sm dark:text-white">
            Live video
          </span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleOpen}
          className="flex items-center justify-center w-1/3 py-2 space-x-2 text-xl text-green-500 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 sm:text-3xl"
        >
          <PhotoLibraryIcon />
          <span className="text-xs font-semibold text-gray-500 sm:text-sm dark:text-white">
            Photos
          </span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleOpen}
          className="flex items-center justify-center w-1/3 py-2 space-x-2 text-xl text-yellow-500 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 sm:text-3xl"
        >
          <InsertEmoticonIcon />
          <span className="text-xs font-semibold text-gray-500 sm:text-sm dark:text-white">
            Feeling
          </span>
        </motion.div>
      </div>
      <PostModel setOpen={setOpen} open={open} />
    </div>
  );
};
export default PostForm;
