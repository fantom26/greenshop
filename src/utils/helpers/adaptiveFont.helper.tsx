import { css } from "styled-components";

type AdaptiveFontProps = {
  pcSize: number;
  mobSize: number;
};

const addSize = ({ pcSize, mobSize }: AdaptiveFontProps) => +pcSize - +mobSize;
const addMobSize = ({ pcSize, mobSize }: AdaptiveFontProps) => addSize({ pcSize, mobSize }) + addSize({ pcSize, mobSize }) * 0.7;

export const AdaptiveFont = ({ pcSize, mobSize }: AdaptiveFontProps) => css`
  @media (max-width: 767px) {
    font-size: clamp(${mobSize}px, calc(${mobSize}px + ${addMobSize({ pcSize, mobSize })} * ((100vw - 320px) / 1200)), ${pcSize}px);
  }
  @media (min-width: 767px) {
    font-size: clamp(${mobSize}px, calc(${mobSize}px + ((${pcSize} - ${mobSize}) * (100vw / 1200))), ${pcSize}px);
  }
`;
