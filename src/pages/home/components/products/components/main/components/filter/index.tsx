import { useEffect, useMemo, useState } from "react";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import * as S from "./filter.styled";

export const Filter = () => {
  const {
    t,
    i18n: { language }
  } = useTranslation();
  const [selectedTab, setSelectedTab] = useState("all");
  const { query, push, asPath } = useRouter();

  const tabs = useMemo(
    () => [
      {
        label: t("pages.home.products.all"),
        id: "all"
      },
      {
        label: t("pages.home.products.new"),
        id: "new"
      },
      {
        label: t("pages.home.products.sale"),
        id: "sale"
      }
    ],
    [language]
  );

  const onClick = (filterOption: string) => {
    setSelectedTab(filterOption);
    const entriesQuery = Object.entries(query);
    switch (filterOption) {
      case "new":
        push(
          {
            query: {
              ...Object.fromEntries(entriesQuery.filter(([param]) => param !== "sale")),
              new: true
            }
          },
          "",
          { scroll: false }
        );
        break;
      case "sale":
        push(
          {
            query: {
              ...Object.fromEntries(entriesQuery.filter(([param]) => param !== "new")),
              sale: true
            }
          },
          "",
          { scroll: false }
        );
        break;
      case "all":
        push(
          {
            query: {
              ...Object.fromEntries(entriesQuery.filter(([param]) => param !== "new" && param !== "sale"))
            }
          },
          "",
          { scroll: false }
        );
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (asPath.includes("sale") || asPath.includes("new")) {
      if (query.sale) {
        setSelectedTab(t("pages.home.products.sale"));
      }

      if (query.new) {
        setSelectedTab(t("pages.home.products.new"));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <S.Tabs>
      {tabs.map(({ label, id }) => (
        <S.Tab key={id} selected={id === selectedTab} onClick={() => onClick(id)}>
          {label}
        </S.Tab>
      ))}
    </S.Tabs>
  );
};
