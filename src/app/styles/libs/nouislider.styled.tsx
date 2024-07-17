import { css } from "styled-components";

export const NoUiSliderStyles = css`
  .noUi-target,
  .noUi-target * {
    box-sizing: border-box;
    box-sizing: border-box;
    user-select: none;
    user-select: none;
    user-select: none;
    user-select: none;
    touch-action: none;
    touch-action: none;
    -webkit-tap-highlight-color: rgb(0 0 0 / 0%);
    -webkit-touch-callout: none;
  }

  .noUi-target {
    position: relative;
  }

  .noUi-base,
  .noUi-connects {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  /* Wrapper for all connect elements.
 */
  .noUi-connects {
    z-index: 0;
    overflow: hidden;
  }

  .noUi-connect,
  .noUi-origin {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    transform-origin: 0 0;
    transform-origin: 0 0;
    transform-origin: 0 0;
    transform-style: preserve-3d;
    transform-style: flat;
    will-change: transform;
  }

  .noUi-connect {
    width: 100%;
    height: 100%;
  }

  .noUi-origin {
    width: 10%;
    height: 10%;
  }

  /* Offset direction
 */
  .noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {
    right: auto;
    left: 0;
  }

  /* Give origins 0 height/width so they don't interfere with clicking the
 * connect elements.
 */

  .noUi-horizontal .noUi-origin {
    height: 0;
  }

  .noUi-handle {
    position: absolute;
    backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .noUi-touch-area {
    width: 100%;
    height: 100%;
  }

  .noUi-state-tap .noUi-connect,
  .noUi-state-tap .noUi-origin {
    transition: transform 0.3s;
    transition: transform 0.3s;
  }

  .noUi-state-drag * {
    cursor: inherit !important;
  }

  /* Slider size and handle placement;
 */
  .noUi-horizontal {
    height: 0.4rem;
  }

  .noUi-horizontal .noUi-handle {
    top: -0.85rem;
    right: -17px;
    width: 2.1rem;
    height: 2.1rem;
    border: 0.3rem solid var(--clr-light);
  }

  .noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {
    right: auto;
    left: -20px;
  }

  /* Styling;
 * Giving the connect element a border radius causes issues with using transform: scale
 */
  .noUi-target {
    border-radius: 4px;
    background-color: rgb(70 163 88 / 20%);
  }

  .noUi-connects {
    border-radius: 0.4rem;
  }

  .noUi-connect {
    background-color: var(--clr-accent-400);
  }

  /* Handles and cursors;
 */
  .noUi-draggable {
    cursor: ew-resize;
  }

  .noUi-handle {
    border-radius: 50%;
    background-color: var(--clr-accent-400);
    cursor: default;
  }

  /* Disabled state;
 */
  [disabled] .noUi-connect {
    background-color: #b8b8b8;
  }

  [disabled].noUi-target,
  [disabled].noUi-handle,
  [disabled] .noUi-handle {
    cursor: not-allowed;
  }

  /* Base;
 *
 */
  .noUi-pips,
  .noUi-pips * {
    box-sizing: border-box;
    box-sizing: border-box;
  }

  .noUi-pips {
    position: absolute;
    color: #999999;
  }

  /* Values;
 *
 */
  .noUi-value {
    position: absolute;
    white-space: nowrap;
    text-align: center;
  }

  .noUi-value-sub {
    color: #cccccc;
    font-size: 10px;
  }

  /* Markings;
 *
 */
  .noUi-marker {
    position: absolute;
    background-color: #cccccc;
  }

  .noUi-marker-sub {
    background-color: #aaaaaa;
  }

  .noUi-marker-large {
    background-color: #aaaaaa;
  }

  /* Horizontal layout;
 *
 */
  .noUi-pips-horizontal {
    top: 100%;
    left: 0;
    width: 100%;
    height: 80px;
    padding: 10px 0;
  }

  .noUi-value-horizontal {
    transform: translate(-50%, 50%);
    transform: translate(-50%, 50%);
  }

  .noUi-rtl .noUi-value-horizontal {
    transform: translate(50%, 50%);
    transform: translate(50%, 50%);
  }

  .noUi-marker-horizontal.noUi-marker {
    width: 2px;
    height: 5px;
    margin-left: -1px;
  }

  .noUi-marker-horizontal.noUi-marker-sub {
    height: 10px;
  }

  .noUi-marker-horizontal.noUi-marker-large {
    height: 15px;
  }

  .noUi-tooltip {
    position: absolute;
    display: block;
    padding: 5px;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    color: #000000;
    white-space: nowrap;
    text-align: center;
    background-color: #ffffff;
  }

  .noUi-horizontal .noUi-tooltip {
    bottom: 120%;
    left: 50%;
    transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }

  .noUi-horizontal .noUi-origin > .noUi-tooltip {
    bottom: 10px;
    left: auto;
    transform: translate(50%, 0);
    transform: translate(50%, 0);
  }
`;
