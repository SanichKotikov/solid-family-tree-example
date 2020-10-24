import { createRenderEffect, createState } from 'solid-js';
import { For } from 'solid-js/dom';
import calcTree from 'relatives-tree';
import { IFamilyData, IFamilyNode } from 'relatives-tree/lib/types';
import Connector from '../Connector/Connector';
import Node from '../Node/Node';

import css from './Tree.module.css';

interface IState {
  tree: IFamilyData;
}

interface IProps {
  rootId: string;
  nodes: ReadonlyArray<IFamilyNode>;
  width: number;
  height: number;
  placeholders?: boolean;
  onChangeRoot: (id: string) => void;
}

function Tree(props: IProps) {
  const width = props.width / 2;
  const height = props.height / 2;

  const [state, setState] = createState<IState>({} as any);

  createRenderEffect(() => {
    setState({
      tree: calcTree(props.nodes, {
        rootId: props.rootId,
        placeholders: props.placeholders,
      }),
    });
  });

  return (
    <div
      class={css.root}
      style={{
        position: 'relative',
        width: `${state.tree.canvas.width * width}px`,
        height: `${state.tree.canvas.height * height}px`,
      }}
    >
      <For each={[...state.tree.connectors]}>
        {(connector) => <Connector connector={connector} width={width} height={height} />}
      </For>
      <For each={[...state.tree.nodes]}>
        {(node) => (
          <Node
            isRoot={node.id === props.rootId}
            node={node}
            style={{
              width: `${props.width}px`,
              height: `${props.height}px`,
              transform: `translate(${node.left * width}px, ${node.top * height}px)`,
            }}
            onSubClick={props.onChangeRoot}
          />
        )}
      </For>
    </div>
  );
}

export default Tree;
