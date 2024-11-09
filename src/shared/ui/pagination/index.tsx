import { MouseEvent } from "react";

import { usePagination } from "@/hooks";

import { ICONS } from "@/shared/svgs";

import * as S from "./pagination.styled";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handleChangePage: (page: number) => void;
}

// TODO maybe rewrite pagination. Do I need dots within the buttons?
export function Pagination({
  totalPages,
  currentPage,
  handleChangePage
}: PaginationProps) {
  const buttonConst = 3;

  const paginationRange = usePagination({
    totalPages,
    currentPage,
    buttonConst,
    siblingCount: 1
  });

  const onChangePage = (e: MouseEvent<HTMLButtonElement>) => {
    handleChangePage(Number(e.currentTarget.textContent));
  };

  return (
    <S.List>
      <S.Button
        disabled={currentPage === 1}
        onClick={() => handleChangePage(currentPage - 1)}
      >
        {ICONS.arrowLeft}
      </S.Button>

      {paginationRange?.map((item, index) => {
        if (item === "...") {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <S.Button key={index} withDots>
              &#8230;
            </S.Button>
          );
        }
        return (
          <S.Button
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={onChangePage}
            actived={+currentPage === +item}
          >
            {item}
          </S.Button>
        );
      })}
      <S.Button
        disabled={currentPage === totalPages}
        onClick={() => handleChangePage(currentPage + 1)}
      >
        {ICONS.arrowRight}
      </S.Button>
    </S.List>
  );
}
