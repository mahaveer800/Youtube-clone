import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  // ⏱ Auto redirect after 30 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 7000); // 30 sec

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-white">
      <button
        onClick={() => navigate("/home")}
        className="text-9xl text-red-600
                   animate-bounce
                   hover:scale-125
                   transition-transform duration-300"
      >
        <i className="fa-brands fa-youtube"></i>
      </button>
    </div>
  );
};

export default Landing;
