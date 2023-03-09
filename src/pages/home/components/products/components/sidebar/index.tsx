import { useRouter } from "next/router";

import { Categories, PriceRange, Sizes } from "./components";
import * as S from "./sidebar.styled";

export const Sidebar = () => {
  const { query, push, asPath } = useRouter();

  const formatQueries = () => {
    if (asPath.includes("_gte") && asPath.includes("_lte")) {
      const entries = Object.entries(query);

      const _gteValue = entries.find(([key]) => key.includes("_gte")).at(1);
      const _lteValue = entries.find(([key]) => key.includes("_lte")).at(1);

      //remove _gte and _lte parameters from object
      const queries = entries.filter(([key]) => !key.includes("_gte") && !key.includes("_lte")).map(([_, value]) => value);
      queries.push(`$${_gteValue} - $${_lteValue}`);
      return queries;
    }

    return Object.values(query);
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
    <S.Sidebar>
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
      <Categories />
      <PriceRange />
      <Sizes />
    </S.Sidebar>
  );
};
