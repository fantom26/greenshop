import { useEffect, useState } from "react";

import { useScrollLock } from "@/hooks";
import { animated, useTransition } from "react-spring";

import { ICONS } from "@/shared/svgs";
import { Button, Drawer } from "@/shared/ui";

import { Categories, PriceRange, Sizes } from "../../../sidebar/components";
import { Sort } from "../sort";
import * as S from "./mobile-filtration.styled";

export const MobileFilter = () => {
  const { lockScroll, unlockScroll } = useScrollLock();

  const [filtersIsOpen, setFiltersIsOpen] = useState(false);

  const toggleFilters = () => {
    setFiltersIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (filtersIsOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersIsOpen]);

  const transition = useTransition(filtersIsOpen, {
    from: {
      opacity: 0,
      transformMain: "translateY(40px)",
      transformFoot: "translateY(200px)"
    },
    enter: {
      opacity: 1,
      transformMain: "translateY(0px)",
      transformFoot: "translateY(0px)"
    },
    leave: {
      opacity: 0,
      transformMain: "translateY(40px)",
      transformFoot: "translateY(200px)"
    }
  });

  return (
    <>
      {transition(({ opacity }, visible) =>
        visible ? (
          <Drawer visible={filtersIsOpen} tag={S.WrapperMenu}>
            <S.CloseButton onClick={toggleFilters} />
            <animated.div style={{ opacity }}>
              <Categories />
            </animated.div>
            <animated.div style={{ opacity }}>
              <Sort />
            </animated.div>
            <animated.div style={{ opacity }}>
              <Sizes />
            </animated.div>
            <animated.div style={{ opacity }}>
              <PriceRange mobileHandler={toggleFilters} />
            </animated.div>
          </Drawer>
        ) : null
      )}
      <S.WrapperBtn>
        <Button onClick={toggleFilters} startIcon={ICONS.filter} />
      </S.WrapperBtn>
    </>
  );
};
