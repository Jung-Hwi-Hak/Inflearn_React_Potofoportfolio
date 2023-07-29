import { useSearchBar } from "../../../commons/hooks/customs/useSearchBar";
import { useQueryFetchBoards } from "../../../commons/hooks/queries/useQueryFetchBoards";
import { useQueryFetchBoardsCount } from "../../../commons/hooks/queries/useQueryFetchBoardsCount";
import Paginations01 from "../../../commons/paginations/01/Paginations01.index";
import SearchBar01 from "../../../commons/searchBars/searchBar01/SearchBar01.index";
import * as S from "./BoardList.styles";
import BoardListHeader from "./header/BoardListHeader";
import BoardListBody from "./body/BoardListBody";
import BoardListFooter from "./footer/BoardListFooter";
import { usePagination } from "../../../commons/hooks/customs/usePagination";
import BestBoardListIndex from "./bestList/BestBoardList.index";
import { memo } from "react";

function BoardList(): JSX.Element {
  const { data, refetch } = useQueryFetchBoards();
  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQueryFetchBoardsCount();

  const paginationArgs = usePagination({
    refetch,
    count: dataBoardsCount?.fetchBoardsCount,
  });

  const { onChangeKeyword, refetchEnterSearch } = useSearchBar({
    refetch,
    refetchCount: refetchBoardsCount,
    setActivePage: paginationArgs.setActivePage,
    setStartPage: paginationArgs.setStartPage,
  });

  return (
    <S.Wrapper>
      <BestBoardListIndex />
      <BoardListHeader>
        <SearchBar01 onChangeKeyword={onChangeKeyword} refetchEnterSearch={refetchEnterSearch} />
      </BoardListHeader>
      <BoardListBody data={data} />
      <BoardListFooter>
        <Paginations01 {...paginationArgs} />
      </BoardListFooter>
    </S.Wrapper>
  );
}
export default memo(BoardList);
