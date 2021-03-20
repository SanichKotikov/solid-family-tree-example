import { JSX } from 'solid-js';
import { Show } from 'solid-js/web';
import { ExtNode } from 'relatives-tree/lib/types';

import css from './Node.module.css';

interface IProps {
  isRoot: boolean;
  node: ExtNode;
  style?: JSX.CSSProperties;
  onSubClick: (id: string) => void;
}

function Node(props: IProps) {
  const onClick = () => props.onSubClick(props.node.id);

  return (
    <div class={css.root} style={props.style}>
      <div
        class={css.inner}
        classList={{
          [css.male]: props.node.gender === 'male',
          [css.female]: props.node.gender === 'female',
          [css.isRoot]: props.isRoot,
        }}
      />
      <Show when={props.node.hasSubTree}>
        <div
          class={css.sub}
          classList={{
            [css.male]: props.node.gender === 'male',
            [css.female]: props.node.gender === 'female',
          }}
          onClick={onClick}
        />
      </Show>
    </div>
  );
}

export default Node;
