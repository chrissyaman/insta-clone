import React, { useState } from "react";
import "../style.css";
import Login from "./Login.tsx";
import Signup from "./Signup.tsx";

function Authentication() {
  const [active, setActive] = useState("login");
  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  return (
    <div className="flex flex-row items-center my-0 mx-[50px]">
      <div className="basis-1/2 text-center">
        <img
          className="w-[400px] mt-10"
          src="https://i.imgur.com/P3Vm1Kq.png"
          alt=""
        />
      </div>
      <div className="basis-1/2">
        {active === "login" ? <Login /> : <Signup />}
        <div className="border border-solid border-gray-500 p-5 mx-[30px] text-center mt-[15px]">
          <span className="font-medium text-sm ">
            {active === "login" ? (
              <>
                {" "}
                Don't have an account?{" "}
                <button
                  className="bg-transparent text-bluish font-bold border-none hover:cursor-pointer"
                  onClick={handleChange}
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                {" "}
                Have an account?{" "}
                <button
                  className="bg-transparent text-bluish font-bold border-none hover:cursor-pointer"
                  onClick={handleChange}
                >
                  Log in
                </button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;