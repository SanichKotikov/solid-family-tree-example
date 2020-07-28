import { IConnector } from 'relatives-tree/lib/types';

interface IProps {
  connector: IConnector;
  width: number;
  height: number;
}

function Connector({ connector, width, height }: IProps) {
  const [x1, y1, x2, y2] = connector.points;

  return (
    <i
      style={{
        position: 'absolute',
        width: `${Math.max(1, (x2 - x1) * width + 1)}px`,
        height: `${Math.max(1, (y2 - y1) * height + 1)}px`,
        background: `#999`,
        transform: `translate(${x1 * width}px, ${y1 * height}px)`,
        pointerEvents: 'none',
      }}
    />
  );
}

export default Connector;
