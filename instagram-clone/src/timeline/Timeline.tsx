import React, { useState } from "react";
import Suggestions from "./Suggestions";
import Post from "./posts/Post";
import "../style.css"

// see https://youtu.be/SqcY0GlETPk?t=3148
export interface PostProps {
  user: string;
  image_url: string;
  image_alt: string;
  timestamp: string;
  likes: number;
}

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "dannyg",
      image_url:
        "https://www.cnusports.com/images/2019/8/19/Danny_Feldman.jpg?width=300",
      image_alt: "Coach Daniel Glenn Feldman",
      likes: 69,
      timestamp: "2d",
    },
    {
      user: "Alleonard",
      image_url:
        "https://gobatesbobcats.com/images/2020/6/2//alison_leonard_wxc_2009_10.jpg?width=300",
      image_alt: "Coach Al",
      likes: 134,
      timestamp: "12h",
    },
    {
      user: "Victoria",
      image_url:
        "https://s.hdnux.com/photos/01/05/71/11/18322028/6/rawImage.jpg",
      image_alt: "Victoria slay",
      likes: 123444,
      timestamp: "1d",
    },
  ]);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="flex flex-col">
          {posts.map((post: PostProps) => (
            <Post
              key={post.user} // o/w, warning that each child in list should have unique 'key' prop
              user={post.user}
              image_url={post.image_url}
              image_alt={post.image_alt}
              timestamp={post.timestamp}
              likes={post.likes}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;