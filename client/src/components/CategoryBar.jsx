import React, { useState } from "react";

const CategoryBar = () => {
  return (
    <>
      {/* <!-- Category bar --> */}

      <div className="h-24 w-screen flex items-center justify-center space-x-2 top-20 bg-white shadow-md z-20">
        <div className="flex items-center space-x-10 justify-center mr-16">
          <div className="group flex flex-col items-center text-gray-400 gap-2 transition-all hover:text-black hover:border-b-2 hover:border-pp-100">
            <span class="material-symbols-outlined">femur_alt</span>
            <p className="text-xs font-normal">Bone Health</p>
          </div>
          <div className="group flex flex-col items-center text-gray-400 gap-2 transition-all hover:text-black hover:border-b-2 hover:border-pp-100">
            <span class="material-symbols-outlined">visibility</span>
            <p className="text-xs font-normal">Eye Health</p>
          </div>
          <div className="group flex flex-col items-center text-gray-400 gap-2 transition-all hover:text-black hover:border-b-2 hover:border-pp-100">
            <span class="material-symbols-outlined">allergies</span>
            <p className="text-xs font-normal">Immune System</p>
          </div>
          <div className="group flex flex-col items-center text-gray-400 gap-2 transition-all hover:text-black hover:border-b-2 hover:border-pp-100">
            <span class="material-symbols-outlined">body_system</span>
            <p className="text-xs font-normal">Healthier Diet</p>
          </div>
          <div className="group flex flex-col items-center text-gray-400 gap-2 transition-all hover:text-black hover:border-b-2 hover:border-pp-100">
            <span class="material-symbols-outlined">menstrual_health</span>
            <p className="text-xs font-normal">Natural Sweeteners</p>
          </div>
        </div>

        <div className="flex justify-around items-center rounded-xl shadow-md h-12 w-24 border group hover:bg-pp-100 transition-all">
          <span className="material-symbols-outlined pl-2 group-hover:text-white">
            sync_alt
          </span>
          <p className="text-xs font-medium pr-2 group-hover:text-white">
            Filters
          </p>
        </div>
      </div>
    </>
  );
};

export default CategoryBar;
