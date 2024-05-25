import React, { useState } from "react";
import Suggestion from "./Suggestion";
import "../style.css"

export interface SuggestionProps {
  username: string;
  message: string;
}

function Suggestions() {
  const [suggestions, setSuggestions] = useState([
    { username: "jsmith", message: "New to Instagram" },
    { username: "qjones", message: "Famous Dude" },
    { username: "qlatifah", message: "The Equalizer" },
    { username: "jtweedy", message: "Just a rocker dude" },
  ]);

  return (
    <div className="w-[350px] mt-[30px] ml-[50px] font-sans">
      <div className="flex flex-row justify-between mb-2.5 text-gray-500">
        <span>Suggested for you</span>
        <button className="bg-transparent border-none font-bold text-black hover:cursor-pointer hover:text-gray-500">
          See all
        </button>
      </div>
      <div className="flex flex-col w-full">
        {suggestions.map((suggestion: SuggestionProps) => (
          <Suggestion
            key={suggestion.username} // o/w, warning about needing unique key prop
            username={suggestion.username}
            message={suggestion.message}
          />
        ))}
      </div>
    </div>
  );
}

export default Suggestions;