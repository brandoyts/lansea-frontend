import React from "react";

const SearchInput = () => {
  return (
    <div className="mx-auto my-5 max-w-[800px] bg-indigo-500 rounded-md p-12">
      <form action="#" className="flex justify-between items-center">
        <input
          required
          type="text"
          autoComplete="off"
          placeholder="Find your desired job..."
          className="w-full p-3 text-md rounded-l-xl outline-none md:text-lg"
        />
        <button className="w-full p-3 text-md font-bold bg-yellow-300 rounded-r-xl inline-flex justify-center items-center gap-1 hover:bg-yellow-400 md:text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Find
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
