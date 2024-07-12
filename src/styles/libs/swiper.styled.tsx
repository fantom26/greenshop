import { css } from "styled-components";

export const SwiperStyles = css`
  .swiper,
  swiper-container {
    position: relative;

    /* Fix of Webkit flickering */
    z-index: 1;
    display: block;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    overflow: hidden;
    list-style: none;
  }

  .swiper-wrapper {
    position: relative;
    z-index: 1;
    display: flex;
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    transition-timing-function: initial;
    transition-property: transform;
  }

  .swiper-android .swiper-slide,
  .swiper-wrapper {
    transform: translate3d(0, 0, 0);
  }

  .swiper-horizontal {
    touch-action: pan-y;
  }

  .swiper-slide,
  swiper-slide {
    position: relative;
    display: block;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    transition-property: transform;
  }

  .swiper-slide-invisible-blank {
    visibility: hidden;
  }

  /* Auto Height */
  .swiper-autoheight,
  .swiper-autoheight .swiper-slide {
    height: auto;
  }

  .swiper-autoheight .swiper-wrapper {
    align-items: flex-start;
    transition-property: transform, height;
  }

  .swiper-backface-hidden .swiper-slide {
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  .swiper-centered {
    > .swiper-wrapper::before {
      flex-shrink: 0;
      order: 9999;
      content: "";
    }

    > .swiper-wrapper > .swiper-slide {
      scroll-snap-align: center center;
      scroll-snap-stop: always;
    }
  }

  .swiper-centered.swiper-horizontal {
    > .swiper-wrapper > .swiper-slide:first-child {
      margin-inline-start: var(--swiper-centered-offset-before);
    }

    > .swiper-wrapper::before {
      width: var(--swiper-centered-offset-after);
      height: 100%;
      min-height: 1px;
    }
  }

  .swiper-pagination {
    z-index: 10;
    margin-top: 1rem;
    text-align: center;
    transform: translate3d(0, 0, 0);
    transition: 300ms opacity;

    &.swiper-pagination-hidden {
      opacity: 0;
    }

    .swiper-pagination-disabled > &,
    &.swiper-pagination-disabled {
      display: none !important;
    }
  }

  /* Common Styles */
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    width: 100%;
  }

  /* Bullets */
  .swiper-pagination-bullets-dynamic {
    overflow: hidden;
    font-size: 0;

    .swiper-pagination-bullet {
      position: relative;
      transform: scale(0.33);
    }

    .swiper-pagination-bullet-active {
      transform: scale(1);
    }

    .swiper-pagination-bullet-active-main {
      transform: scale(1);
    }

    .swiper-pagination-bullet-active-prev {
      transform: scale(0.66);
    }

    .swiper-pagination-bullet-active-prev-prev {
      transform: scale(0.33);
    }

    .swiper-pagination-bullet-active-next {
      transform: scale(0.66);
    }

    .swiper-pagination-bullet-active-next-next {
      transform: scale(0.33);
    }
  }

  .swiper-pagination-bullet {
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: var(--clr-accent);
    opacity: 0.3;

    &:only-child {
      display: none !important;
    }

    .swiper-pagination-clickable & {
      cursor: pointer;
    }
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-horizontal.swiper-pagination-bullets {
    .swiper-pagination-bullet {
      margin-right: 0.4rem;
      margin-left: 0.4rem;
    }

    &.swiper-pagination-bullets-dynamic {
      left: 50%;
      white-space: nowrap;
      transform: translateX(-50%);

      .swiper-pagination-bullet {
        transition: 200ms transform, 200ms left;
      }
    }
  }

  .swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
  :host(.swiper-horizontal.swiper-rtl) .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    transition: 200ms transform, 200ms right;
  }

  .swiper-pagination-lock {
    display: none;
  }
`;
