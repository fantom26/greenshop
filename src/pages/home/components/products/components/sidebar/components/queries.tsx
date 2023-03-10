import { useRouter } from "next/router";

import { SORT_IGNORED_KEYS } from "@constants";

import * as S from "./queries.styled";

export const Queries = () => {
  const { query, push, asPath } = useRouter();

  const formatQueries = () => {
    const entries = Object.entries(query);
    if (asPath.includes("_gte") && asPath.includes("_lte")) {
      const _gteValue = entries.find(([key]) => key.includes("_gte")).at(1);
      const _lteValue = entries.find(([key]) => key.includes("_lte")).at(1);

      //remove _gte and _lte parameters from object and SORT_IGNORED_KEYS
      const queries = entries.filter(([key]) => !key.includes("_gte") && !key.includes("_lte") && !SORT_IGNORED_KEYS.includes(key)).map(([_, value]) => value);

      queries.push(`$${_gteValue} - $${_lteValue}`);

      return queries;
    }

    return entries.filter(([key]) => !SORT_IGNORED_KEYS.includes(key)).map(([_, value]) => value);
  };

  const deleteParam = (param: string) => {
    push(
      {
        query: {
          ...Object.fromEntries(Object.entries(query).filter(([key, queryParam]) => !param.includes(queryParam as string)))
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
        </S.FilterParams>
      ) : null}
    </>
  );
};
