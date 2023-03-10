import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { useTranslation } from "@hooks";

import * as S from "./filter.styled";

export const Filter = () => {
  const t = useTranslation();
  const [selectedTab, setSelectedTab] = useState(t.pages.home.products.all);
  const { query, push, asPath } = useRouter();

  const tabs = [
    {
      label: t.pages.home.products.all,
      id: "all"
    },
    {
      label: t.pages.home.products.new,
      id: "new"
    },
    {
      label: t.pages.home.products.sale,
      id: "sale"
    }
  ];

  const onClick = (filterOption: string) => {
    setSelectedTab(tabs.find(({ id }) => id === filterOption).label);
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
        setSelectedTab(t.pages.home.products.sale);
      }

      if (query.new) {
        setSelectedTab(t.pages.home.products.new);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <S.Tabs>
      {tabs.map(({ label, id }) => (
        <S.Tab key={id} selected={label === selectedTab} onClick={() => onClick(id)}>
          {label}
        </S.Tab>
      ))}
    </S.Tabs>
  );
};
