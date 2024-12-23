import { SORT_KEYS } from "@/utils/constants";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import * as S from "./queries.styled";

// TODO rethink the logic for this component. In my view, I made here a lot of mistakes and unnecessary moves
export function Queries() {
  const { query, push } = useRouter();
  const { t } = useTranslation("home");
  const entries = Object.entries(query);

  const formatQueries = () => {
    const entriesMap = new Map(entries);
    const _gteValue = entriesMap.get("price_gte");
    const _lteValue = entriesMap.get("price_lte");
    if (_gteValue && _lteValue) {
      // remove _gte and _lte parameters from object
      const queries = entries
        .filter(
          ([key]) =>
            !key.includes("_gte") &&
            !key.includes("_lte") &&
            SORT_KEYS.includes(key)
        )
        .map(([, value]) => value);

      queries.push(`$${_gteValue} - $${_lteValue}`);

      return queries;
    }

    return entries
      .filter(([key]) => SORT_KEYS.includes(key))
      .map(([, value]) => value);
  };

  const deleteParam = (param: string) => {
    const newQueryOptions =
      param === "ALL"
        ? {
            ...Object.fromEntries(
              entries.filter(([key]) => !SORT_KEYS.includes(key))
            )
          }
        : {
            ...Object.fromEntries(
              entries.filter(
                ([, queryParam]) => !param.includes(queryParam as string)
              )
            )
          };

    push(
      {
        query: newQueryOptions
      },
      "",
      { scroll: false }
    );
  };

  if (formatQueries().length > 0) {
    return (
      <S.FilterParams>
        {formatQueries()?.map((param) => (
          <S.FilterParam key={param as string}>
            <span>{param}</span>
            <S.FilterParamButton onClick={() => deleteParam(param as string)} />
          </S.FilterParam>
        ))}
        {formatQueries().length > 1 && (
          <S.FilterParam reset>
            <span>{t("products.resetAll")}</span>
            <S.FilterParamButton onClick={() => deleteParam("ALL")} />
          </S.FilterParam>
        )}
      </S.FilterParams>
    );
  }

  return null;
}
