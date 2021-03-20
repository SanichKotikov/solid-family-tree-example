import { Connector as TreeConnector } from 'relatives-tree/lib/types';

const MIN_THICKNESS = 1;

interface IProps {
  connector: TreeConnector;
  width: number;
  height: number;
  thickness?: number;
}

function calcSide(size: number, factor: number, thickness: number): number {
  return Math.max(MIN_THICKNESS, size * factor + thickness);
}

function Connector({ connector, width, height, thickness = MIN_THICKNESS }: IProps) {
  const [x1, y1, x2, y2] = connector;

  return (
    <i
      style={{
        position: 'absolute',
        width: `${calcSide(x2 - x1, width, thickness)}px`,
        height: `${calcSide(y2 - y1, height, thickness)}px`,
        background: `#999`,
        transform: `translate(${x1 * width - (thickness / 2)}px, ${y1 * height - (thickness / 2)}px)`,
        pointerEvents: 'none',
      }}
    />
  );
}

export default Connector;
