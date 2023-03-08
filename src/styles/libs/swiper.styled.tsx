import { css } from "styled-components";

export const SwiperStyles = css`
  .swiper,
  swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    /* Fix of Webkit flickering */
    z-index: 1;
    display: block;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
    box-sizing: content-box;
  }
  .swiper-android .swiper-slide,
  .swiper-wrapper {
    transform: translate3d(0px, 0, 0);
  }
  .swiper-horizontal {
    touch-action: pan-y;
  }

  .swiper-slide,
  swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    display: block;
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
      content: "";
      flex-shrink: 0;
      order: 9999;
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
      height: 100%;
      min-height: 1px;
      width: var(--swiper-centered-offset-after);
    }
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
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
    bottom: var(--swiper-pagination-bottom, 8px);
    top: var(--swiper-pagination-top, auto);
    left: 0;
    width: 100%;
  }
  /* Bullets */
  .swiper-pagination-bullets-dynamic {
    overflow: hidden;
    font-size: 0;
    .swiper-pagination-bullet {
      transform: scale(0.33);
      position: relative;
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
    width: 0.8rem;
    height: 0.8rem;
    display: inline-block;
    border-radius: 50%;
    background-color: var(--clr-accent);
    opacity: 0.3;
    @at-root button#{&} {
      border: none;
      margin: 0;
      padding: 0;
      box-shadow: none;
      appearance: none;
    }
    .swiper-pagination-clickable & {
      cursor: pointer;
    }

    &:only-child {
      display: none !important;
    }
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-horizontal.swiper-pagination-bullets {
    .swiper-pagination-bullet {
      margin-left: 0.4rem;
      margin-right: 0.4rem;
    }
    &.swiper-pagination-bullets-dynamic {
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
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
