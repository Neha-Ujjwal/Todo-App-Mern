import React from "react";
import { useDispatch } from "react-redux"; // Import the useDispatch hook
import { TABS } from "../redux/actions/type.js";
import { toggleTab } from "../redux/actions/index.js";

const Tabs = ({ currentTab }) => {
  const dispatch = useDispatch(); // Initialize the useDispatch hook

  return (
    <>
      {TABS.map((tab) => (
        <button
          className={`${
            tab === currentTab
              ? "bg-[#34495e]  text-white font-bold py-2 px-2 m-2 mt-0 rounded"
              : "  text-black font-bold py-2 px-2 m-2 mt-0 rounded"
          }`}
          onClick={() => dispatch(toggleTab(tab))} // Pass the tab value to the toggleTab action
        >
          {tab}
        </button>
      ))}
    </>
  );
};

export default Tabs;
