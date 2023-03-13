import { useRouter } from "next/router";

import { SORT_KEYS } from "@constants";
import { useTranslation } from "@hooks";

import * as S from "./queries.styled";

export const Queries = () => {
  const { query, push, asPath } = useRouter();
  const t = useTranslation();
  const entries = Object.entries(query);

  const formatQueries = () => {
    if (asPath.includes("_gte") && asPath.includes("_lte")) {
      const _gteValue = entries.find(([key]) => key.includes("_gte")).at(1);
      const _lteValue = entries.find(([key]) => key.includes("_lte")).at(1);

      //remove _gte and _lte parameters from object
      const queries = entries.filter(([key]) => !key.includes("_gte") && !key.includes("_lte") && SORT_KEYS.includes(key)).map(([_, value]) => value);

      queries.push(`$${_gteValue} - $${_lteValue}`);

      return queries;
    }

    return entries.filter(([key]) => SORT_KEYS.includes(key)).map(([_, value]) => value);
  };

  const deleteParam = (param: string) => {
    // Removing all queries from sidebar
    if (param === "ALL") {
      push(
        {
          query: {
            ...Object.fromEntries(entries.filter(([key]) => !SORT_KEYS.includes(key)))
          }
        },
        "",
        { scroll: false }
      );

      return;
    }

    push(
      {
        query: {
          ...Object.fromEntries(entries.filter(([key, queryParam]) => !param.includes(queryParam as string)))
        }
      },
      "",
      { scroll: false }
    );
  };

  return (
    <>
      {formatQueries().length > 0 ? (
        <S.FilterParams>
          {formatQueries()?.map((param, index) => (
            <S.FilterParam key={index}>
              <span>{param}</span>
              <S.FilterParamButton onClick={() => deleteParam(param as string)} />
            </S.FilterParam>
          ))}
          {formatQueries().length > 1 && (
            <S.FilterParam reset>
              <span>{t.pages.home.products.resetAll}</span>
              <S.FilterParamButton onClick={() => deleteParam("ALL")} />
            </S.FilterParam>
          )}
        </S.FilterParams>
      ) : null}
    </>
  );
};
