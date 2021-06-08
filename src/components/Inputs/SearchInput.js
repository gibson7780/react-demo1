import { useContext } from 'react';
import SearchContext from '../contexts/SearchContext';

const SearchInput = () => {
  const context = useContext(SearchContext);
  const { handleSearch, tempSearchWord } = context;
  return (
    <input
      type="text"
      placeholder="search"
      onChange={handleSearch}
      value={tempSearchWord}
    />
  );
};

export default SearchInput;
