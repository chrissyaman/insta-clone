import React, { useState } from "react";
import "../style.css"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        const displayName = username;
        console.log(auth.currentUser);
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, {displayName})
        );
      })
      .catch((err) => {
        alert(err);
       });
   };

  return (
    <div className="flex flex-col border border-solid border-gray-500 p-[50px] mx-[30px]">
      <img
        className="w-[200px] mx-auto mb-10"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
        className="bg-graytone border border-solid border-gray-500 rounded-[3px] p-3 mb-5 text-white focus:outline-[1px] outline-gray-500"
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        value={username}
        className="bg-graytone border border-solid border-gray-500 rounded-[3px] p-3 mb-5 text-white focus:outline-[1px] outline-gray-500"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="passsword"
        placeholder="Password"
        value={password}
        className="bg-graytone border border-solid border-gray-500 rounded-[3px] p-3 mb-5 text-white focus:outline-[1px] outline-gray-500"
      />
      <button
        onClick={handleSignup}
        className="p-3 rounded-[8px] border-none text-white bg-bluish font-bold hover:cursor-pointer"
      >
        Sign up
      </button>
    </div>
  );
}

export default Signup;