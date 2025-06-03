import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex bg-white rounded-lg shadow-md overflow-hidden"
    >
      <input
        type="text"
        placeholder="Search destinations..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow px-4 py-2 text-slate-800 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-forestDark text-white px-4 py-2 hover:bg-yellow-400 transition font-semibold"
      >
        Search
      </button>
    </form>
  );
}
