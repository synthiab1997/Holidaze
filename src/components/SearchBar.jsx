import React from "react";

function SearchBar({ onSearch }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-white shadow-md p-4 rounded-lg max-w-xl mx-auto -mt-12 relative z-10"
    >
      <div className="flex">
        <input
          type="text"
          placeholder="Search venues..."
          onChange={(e) => (onSearch ? onSearch(e.target.value) : null)}
          className="flex-grow px-4 py-2 rounded-l-lg border border-stone focus:outline-none focus:ring-2 focus:ring-sky"
        />
        <button
          type="submit"
          className="bg-forestDark text-white px-6 py-2 rounded-r-lg hover:bg-moss transition"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
