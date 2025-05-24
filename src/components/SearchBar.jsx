export default function SearchBar({ onSearch }) {
    return (
      <input
        type="text"
        placeholder="Search venues..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full border p-2 rounded"
      />
    );
  }