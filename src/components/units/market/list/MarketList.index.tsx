import SearchBar01 from "../../../commons/searchBars/searchBar01/SearchBar01.index";
import * as S from "./MarketList.styles";
import BoardListHeader from "./header/BoardListHeader";
import MarketListBody from "./body/MarketListBody";
import BestBoardListIndex from "./bestList/BestBoardList.index";
import { memo } from "react";
import { useMarketList } from "../../../commons/hooks/customs/useMarketList";

function MarketList(): JSX.Element {
  const { data, refetch, onLoadMore, onChangeIsSold, searchKeyword, setSearchKeyword } =
    useMarketList();

  return (
    <S.Wrapper>
      <button onClick={onChangeIsSold}>변경!</button>
      <BestBoardListIndex />
      <BoardListHeader>
        <SearchBar01
          refetch={refetch}
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
      </BoardListHeader>
      <MarketListBody data={data} onLoadMore={onLoadMore} />
    </S.Wrapper>
  );
}
export default memo(MarketList);