import { LOADER_CLASSNAME } from "@/utils/constants";

export function GlobalLoader() {
  return (
    <div id={LOADER_CLASSNAME}>
      <div className="leafs">
        <div className="leaf leaf--1">
          <div />
        </div>
        <div className="leaf leaf--2">
          <div />
        </div>
        <div className="leaf leaf--3">
          <div />
        </div>
        <div className="leaf leaf--4">
          <div />
        </div>
      </div>
    </div>
  );
}
