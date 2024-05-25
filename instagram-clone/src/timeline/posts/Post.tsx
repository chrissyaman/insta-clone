import React from "react";
import Avatar from "@mui/material/Avatar";
import MoreOptionsIcon from "@mui/icons-material/MoreHoriz";
import FavoritesIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/SendOutlined";
import BookmarkIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { faker } from "@faker-js/faker";
import "../../style.css"

function Post({ user, image_url, image_alt, timestamp, likes }: PostProps) {
  return (
    <div className="w-[550px] mx-10 mt-[30px] mb-[50px]">
      <div className="flex flex-row justify-between items-center mb-2.5 font-sans">
        <div className="post__author flex flex-row items-center font-bold text-lg hover:cursor-pointer">
          <Avatar className="mr-2.5">
            <img
              className="w-full rounded-md border border-gray-400"
              src={faker.image.avatarLegacy()}
            />
          </Avatar>
          {user}
          <span className="text-gray-500 text-sm ml-1">• {timestamp}</span>
        </div>
        <div className="post__more hover:cursor-pointer">
          <MoreOptionsIcon />
        </div>
      </div>
      <div className="post__image">
        <img src={image_url} alt={image_alt} />
      </div>
      <div className="font-sans">
        <div className="flex flex-row items-center justify-between">
          <div className="w-30 flex flex-row items-center justify-between">
            <FavoritesIcon className="text-3xl post-icon hover:cursor-pointer hover:text-gray-500" />
            <ChatIcon className="text-3xl post-icon hover:cursor-pointer hover:text-gray-500" />
            <ShareIcon
              className="text-[31px] transform -rotate-35 mt-2 post-icon hover:cursor-pointer hover:text-gray-500"
              id="send-icon"
            />
          </div>
          <div className="post__footer-save">
            <BookmarkIcon className="text-3xl" />
          </div>
        </div>
        <span className="post__footer-liked">{likes} likes</span>
      </div>
    </div>
  );
}

export default Post;