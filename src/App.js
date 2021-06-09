import SearchContext from './components/contexts/SearchContext';
import './layout.sass';
import './base.sass';
import MainContent from './components/Layout/MainContent';
import useFetch from './components/customHooks/useFetch';
import { useState } from 'react';

function App() {
  const [tempSearchWord, setTempSearchWord] = useState(''); // input render value
  const [realSearchWord, setRealSearchWord] = useState(''); // call api value
  const [data] = useFetch(
    `/api/v1/search?query=${realSearchWord}&hitsPerPage=30`
  );

  const handleSearch = (e) => {
    if (window.delay) {
      clearTimeout(window.delay);
    }
    const value = e.target.value;
    setTempSearchWord(value);

    // 減少call api次數
    window.delay = setTimeout(() => {
      setRealSearchWord(value);
    }, 500);
  };

  return (
    <SearchContext.Provider
      value={{
        data: data,
        handleSearch: handleSearch,
        tempSearchWord: tempSearchWord,
      }}
    >
      <div className="layout">
        <MainContent />
      </div>
    </SearchContext.Provider>
  );
}

export default App;
