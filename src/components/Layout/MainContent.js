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

  // 增加上限
  const handleReadMore = () => {
    setLimit((prev) => prev + 10);
  };
  // 刪除
  const handleDelete = (index) => {
    let cloneData = [...renderData];
    cloneData.splice(index, 1);
    setRenderData(cloneData);
  };
  // 分割資料
  useEffect(() => {
    if (!data) return;
    const partData = data.hits.slice(0, limit);
    setRenderData(partData);
    setTotal(data.nbHits);
  }, [data, limit]);

  return (
    <div className="mainContent">
      <h1>TASK ONE</h1>
      <SearchInput />
      {!renderData && <Loading />}
      {renderData && (
        <Table data={renderData} total={total} handleDelete={handleDelete} />
      )}

      {renderData && (
        <div className="flex-center p-20">
          {data?.hits?.length !== 0 ? (
            renderData.length < total ? (
              <MoreButton handleReadMore={handleReadMore} />
            ) : (
              '已經到底囉!'
            )
          ) : (
            '查無資料'
          )}
        </div>
      )}
    </div>
  );
};

export default MainContent;
