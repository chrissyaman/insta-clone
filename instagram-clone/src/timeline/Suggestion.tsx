import React from "react";
import Avatar from "@mui/material/Avatar";
import { faker } from "@faker-js/faker";
import "../style.css"

function Suggestion({ username, message }: SuggestionProps) {
  return (
    <div className="flex flex-row justify-between mb-2.5">
      <div className="flex flex-row hover:cursor-pointer">
        <div className="mr-2.5">
          <Avatar>
            <img src={faker.image.avatar()} />
          </Avatar>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">{username}</span>
          <span className="font-light text-sm">{message}</span>
        </div>
      </div>
      <button className="bg-transparent border-none font-bold text-cornflowerblue hover:cursor-pointer hover:text-gray-500">
        Follow
      </button>
    </div>
  );
}

export default Suggestion;

