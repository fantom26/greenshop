import { css } from "styled-components";

export const NoUiSliderStyles = css`
  .noUi-target,
  .noUi-target * {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -ms-touch-action: none;
    touch-action: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none;
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
    right: 0;
    top: 0;
    z-index: 1;
    -ms-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform-style: preserve-3d;
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
    left: 0;
    right: auto;
  }
  /* Give origins 0 height/width so they don't interfere with clicking the
 * connect elements.
 */

  .noUi-horizontal .noUi-origin {
    height: 0;
  }
  .noUi-handle {
    position: absolute;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .noUi-touch-area {
    width: 100%;
    height: 100%;
  }
  .noUi-state-tap .noUi-connect,
  .noUi-state-tap .noUi-origin {
    -webkit-transition: transform 0.3s;
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
    right: -17px;
    top: -0.85rem;
    border: 0.3rem solid var(--clr-light);
    width: 2.1rem;
    height: 2.1rem;
  }

  .noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {
    left: -20px;
    right: auto;
  }
  /* Styling;
 * Giving the connect element a border radius causes issues with using transform: scale
 */
  .noUi-target {
    border-radius: 4px;
    background-color: rgba(70, 163, 88, 0.2);
  }
  .noUi-connects {
    border-radius: 0.4rem;
  }
  .noUi-connect {
    background-color: var(--clr-accent);
  }
  /* Handles and cursors;
 */
  .noUi-draggable {
    cursor: ew-resize;
  }

  .noUi-handle {
    border-radius: 50%;
    background-color: var(--clr-accent);
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
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .noUi-pips {
    position: absolute;
    color: #999;
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
    font-size: 10px;
    color: #ccc;
  }
  /* Markings;
 *
 */
  .noUi-marker {
    position: absolute;
    background-color: #ccc;
  }
  .noUi-marker-sub {
    background-color: #aaa;
  }
  .noUi-marker-large {
    background-color: #aaa;
  }
  /* Horizontal layout;
 *
 */
  .noUi-pips-horizontal {
    left: 0;
    top: 100%;
    padding: 10px 0;
    width: 100%;
    height: 80px;
  }
  .noUi-value-horizontal {
    -webkit-transform: translate(-50%, 50%);
    transform: translate(-50%, 50%);
  }
  .noUi-rtl .noUi-value-horizontal {
    -webkit-transform: translate(50%, 50%);
    transform: translate(50%, 50%);
  }
  .noUi-marker-horizontal.noUi-marker {
    margin-left: -1px;
    width: 2px;
    height: 5px;
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
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    padding: 5px;
    white-space: nowrap;
    text-align: center;
    color: #000;
    background-color: #fff;
  }
  .noUi-horizontal .noUi-tooltip {
    left: 50%;
    bottom: 120%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }
  .noUi-horizontal .noUi-origin > .noUi-tooltip {
    left: auto;
    bottom: 10px;
    -webkit-transform: translate(50%, 0);
    transform: translate(50%, 0);
  }
`;
