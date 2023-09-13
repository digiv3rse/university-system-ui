"use client";

import React, { useState, useRef, useEffect } from "react";

const FilterableList = ({ items, title }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isListVisible, setIsListVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const listRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setIsListVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleItemClick = (item) => {
    setSearchTerm(item);
    setSelectedItem(item);
    setIsListVisible(false);
  };

  return (
    <div className="relative pl-3">
      <input
        type="text"
        placeholder={`${title}...`}
        className="w-full p-2  rounded-md focus:outline-none"
        value={searchTerm}
        onClick={() => setIsListVisible(true)}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isListVisible && (
        <ul className="mt-2 bg-white shadow-3xl rounded-md absolute z-10 w-full max-h-72 overflow-y-scroll" ref={listRef}>
          {items.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer pl-4 pr-2 py-2 hover:bg-primary-50 hover:text-primary-400 text-[.85rem]"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className="absolute top-2 right-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <g id="feArrowDown0" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g id="feArrowDown1" fill="currentColor">
              <path id="feArrowDown2" d="m6 7l6 6l6-6l2 2l-8 8l-8-8z" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default FilterableList;
