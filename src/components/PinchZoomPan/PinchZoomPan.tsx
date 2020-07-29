import { onCleanup } from 'solid-js';
import { create } from 'pinch-zoom-pan';

import css from './PinchZoomPan.module.css';

interface IProps {
  min?: number;
  max?: number;
  captureWheel?: boolean;
  class?: string;
  children: JSX.Element;
}

function PinchZoomPan(props: IProps) {
  let element: HTMLDivElement;
  let cleanup: () => void;

  setTimeout(() => {
    cleanup = create({
      element,
      minZoom: props.min,
      maxZoom: props.max,
      captureWheel: props.captureWheel,
    });
  });

  onCleanup(() => cleanup());

  return (
    <div
      // @ts-ignore
      ref={element}
      class={css.root}
      classList={{ [props.class || '']: !!props.class }}
    >
      <div class={css.point}>
        <div class={css.canvas}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default PinchZoomPan;
