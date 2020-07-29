import { createSignal } from 'solid-js';
import { Show } from 'solid-js/dom';
import { IFamilyNode } from 'relatives-tree/lib/types';
import nodes from 'relatives-tree/samples/average-tree.json';
import PinchZoomPan from '../PinchZoomPan/PinchZoomPan';
import Tree from '../Tree/Tree';

import css from './App.module.css';

const myID = 'kuVISwh7w';

const WIDTH = 70;
const HEIGHT = 80;

function App() {
  const [rootId, setRootId] = createSignal(myID);

  const onResetClick = () => setRootId(myID);
  const onChangeRoot = (id: string) => setRootId(id);

  return (
    <div class={css.root}>
      <header class={css.header}>
        <h1 class={css.title}>
          FamilyTree demo (using SolidJS)
        </h1>
        <a href="https://github.com/SanichKotikov/solid-family-tree-example">GitHub</a>
      </header>
      <PinchZoomPan
        min={0.5}
        max={2.5}
        captureWheel
        class={css.wrapper}
      >
        <Tree
          nodes={nodes as IFamilyNode[]}
          rootId={rootId()}
          width={WIDTH}
          height={HEIGHT}
          onChangeRoot={onChangeRoot}
        />
      </PinchZoomPan>
      <Show when={rootId() !== myID}>
        <button type="button" class={css.reset} onClick={onResetClick}>
          Reset
        </button>
      </Show>
    </div>
  );
}

export default App;
