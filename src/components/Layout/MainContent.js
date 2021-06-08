import { useEffect, useState, useContext } from 'react';
import SearchContext from '../contexts/SearchContext';
import Loading from '../loading/loading';
import Table from '../tables/Table';
import SearchInput from '../Inputs/SearchInput';
import MoreButton from '../buttons/MoreButton';
import './mainContent.sass';
const MainContent = () => {
  const context = useContext(SearchContext);
  const { data } = context;
  const [limit, setLimit] = useState(10);
  const [renderData, setRenderData] = useState();
  const [total, setTotal] = useState();

  const handleReadMore = () => {
    setLimit((prev) => prev + 10);
  };

  const handleDelete = (index) => {
    let cloneData = [...renderData];
    cloneData.splice(index, 1);
    setRenderData(cloneData);
  };
  useEffect(() => {
    if (!data) return;
    const partData = data.hits.slice(0, limit);
    setRenderData(partData);
    setTotal(data.nbHits);
  }, [data, limit]);
  return (
    <div className="mainContent">
      <h1>TEST ONE</h1>
      <SearchInput />
      {!renderData && <Loading />}
      {renderData && (
        <Table data={renderData} total={total} handleDelete={handleDelete} />
      )}

      <div className="flex-center p-20">
        {renderData && renderData.length < total && (
          <MoreButton handleReadMore={handleReadMore} />
        )}
      </div>
    </div>
  );
};

export default MainContent;
