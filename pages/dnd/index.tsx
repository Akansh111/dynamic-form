import { startCase } from 'lodash-es';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { DndProvider, useDrag, useDrop, XYCoord } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { v4 as uuidv4 } from 'uuid';
import Accordion from '../../components/0_atoms/accordion';
import { ALL_TAGS, TAG_BY_CATEGORY, TAG_NAMES } from '../../components/0_atoms/types/elementType';
import graphPaperSVG from '../../components/assets/svg/graph-paper.svg';

export default function DndCanvas() {
  return (
    <div className='!px-0 prose'>
      <div className=' flex flex-row h-full'>
        <ElementsBar />

        <div className='flex w-screen h-screen'>
          <DndProvider backend={HTML5Backend}>
            <DroppableElement />
          </DndProvider>
        </div>
      </div>
    </div>
  );
}

export function ElementsBar() {
  const router = useRouter();

  const MainElementsBar = useCallback(() => {
    if (router.pathname === '/dnd') {
      return <LessElementsBar />;
    }
    return <AllElementsBar />;
  }, [router.pathname]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='w-fit shadow-black/40 flex flex-col h-screen overflow-x-hidden overflow-y-auto bg-white border-r border-gray-200 shadow-lg'>
        <div className=' w-full prose border-b'>
          <h2 className='mt-4 mb-2'>Elements</h2>
        </div>

        <MainElementsBar />
      </div>
    </DndProvider>
  );

  function LessElementsBar() {
    return (
      <div className='px-4 overflow-y-auto'>
        {TAG_NAMES.map((tag, index) => (
          <DraggableElement key={index} tag={tag} />
        ))}
      </div>
    );
  }

  function AllElementsBar() {
    return (
      <div className='px-4 overflow-y-auto'>
        {Object.keys(TAG_BY_CATEGORY).map((categoryKey: string, index) => {
          const category = ((TAG_BY_CATEGORY?.[categoryKey] || []) as string[]) || [];
          const categoryTitle = startCase(categoryKey).toLowerCase();
          return (
            <div className='-mx-4' key={index}>
              <Accordion title={categoryTitle}>
                {category.map((tag, catIndex) => (
                  <DraggableElement key={catIndex} tag={tag} />
                ))}
              </Accordion>
            </div>
          );
        })}
      </div>
    );
  }
}

function DraggableElement({ state, tag, ...props }: { state?: object; tag: string }) {
  const [data, setData] = useState<any>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: tag,
    item: { elementName: tag, state: state },
    collect: (monitor: any) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleContextMenu = (e: any) => {
    e.preventDefault();
    // setting postion in state
    setData({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <>
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
        }}
        className='h-min w-min object-contain px-3 py-1 m-auto font-semibold text-white bg-blue-600 rounded-md'
        // onContextMenu={handleContextMenu}
        {...props}
      >
        {tag}
      </div>

      {data && (
        <div
          className='bg-white border-2 rounded-lg shadow-sm'
          style={{
            position: 'absolute',
            top: data.y,
            left: data.x,
          }}
        >
          <div className='flex flex-col'>
            <button type='button'>Remove</button>
          </div>
        </div>
      )}
    </>
  );
}

const _state = {
  state: {},
};
function getState() {
  return _state.state;
}
function setState(newState: object) {
  _state.state = { ...newState };
}

function DroppableElement() {
  const [, updateState] = useState<any>();

  const handleDrop = (item: { elementName: string; state: any }, monitor: any) => {
    const delta = monitor.getSourceClientOffset() as XYCoord;
    const left = delta.x;
    const top = delta.y;

    const id = uuidv4();
    const newState = {
      ...JSON.parse(JSON.stringify(getState())),
      [`${item.state ? item.state.id : id}`]: {
        id: id,
        left: left,
        top: top,
        tag: item.elementName,
      },
    };
    setState(newState);
    updateState(Math.random());

    console.log(monitor.getClientOffset());
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ALL_TAGS,
    collect: (monitor: any) => ({
      isOver: !!monitor.isOver(),
    }),
    drop: handleDrop,
  }));

  return (
    <div
      ref={drop}
      className={`w-full h-full ${isOver ? 'bg-gray-400' : 'bg-gray-200'}`}
      style={{
        background: `url(${graphPaperSVG.src})`,
      }}
    >
      {Object.values(getState()).map((item: any, key: any) => (
        // <div
        //   className='h-min w-min px-3 py-1 m-2 font-semibold text-white bg-blue-600 rounded-md select-none'
        //   key={item}
        // >
        //   {item}
        // </div>
        <DraggableElement
          key={key}
          tag={item.tag}
          state={item}
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
          }}
        />
      ))}
    </div>
  );
}
