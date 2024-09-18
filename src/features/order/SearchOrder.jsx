import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchQuery) {
      return;
    }
    console.log('Search for', searchQuery);

    navigate(`/order/${searchQuery}`);
    setSearchQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-28 rounded-full px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:w-72 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 sm:w-[600px] sm:focus:w-[620px]"
        type="text"
        value={searchQuery}
        placeholder="Search order..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}
