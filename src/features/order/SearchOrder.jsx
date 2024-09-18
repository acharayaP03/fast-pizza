import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchQuery) {
      return;
    }
    console.log("Search for", searchQuery);

    navigate(`/order/${searchQuery}`);
    setSearchQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchQuery}
        placeholder="Search order..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}
