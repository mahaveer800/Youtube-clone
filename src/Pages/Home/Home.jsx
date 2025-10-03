import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Feed from "../../Components/Feed";

const Home = ({ sidebar }) => {

const [category,setCategory] = useState(0)


  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar  isOpen={sidebar} category= {category} setCategory ={setCategory} />

      {/* Feed */}
      <div className={`flex-1 ml-0 md:ml-56 transition-all duration-300`}>
  <Feed category={category} />
</div>

    </div>
  );
};

export default Home;
