import { memo } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ConvertNodeToTags from '../../1_molecules/convertNodeToTags';
import useStyles from '../hooks/useStyles';
import { INode, ISubNode } from '../types/dataType';
import DroppableElement from './droppableElement';

function Group({ node, nodePath }: { node: ISubNode; nodePath: { obj: object; path: string } }) {
  const { styleInString, styleClassNames } = useStyles({ node });

  const CustomTag = `${node?.type.toLowerCase()}` as keyof JSX.IntrinsicElements;

  return (
    <>
      <CustomTag
        className='min-h-fit relative grid grid-cols-12 gap-4 p-4 my-8 border-2 border-gray-600 rounded-lg'
        style={{
          gridColumn: `span ${node?.style?.gridColumn || '12'} / span ${node?.style?.gridColumn || '12'}`,
        }}
      >
        <style jsx>{`
          label {
            ${styleInString}
          }
        `}</style>
        <label className={'left-2 -top-4 text-md absolute px-2 bg-white ' + styleClassNames}>{node.groupLabel}</label>

        {/* <style jsx>{`
          `}</style> */}

        {node.childNodes &&
          node.childNodes.length > 0 &&
          node.childNodes.map((childNode: INode, key: number) => (
            <ConvertNodeToTags
              nodeData={childNode}
              nodePath={{
                obj: nodePath.obj,
                path: `${nodePath.path}.node.childNodes[${key}]`,
              }}
              key={key}
            />
          ))}

        {node?.maxInstance &&
          node?.childNodes &&
          parseInt(node.maxInstance) > (node?.childNodes as Array<Object>).length && (
            <div className=' !col-span-12 mt-4'>
              {/* <AddElement
                nodePath={{
                  obj: nodePath.obj,
                  path: `${nodePath.path}.node.childNodes`,
                }}
              /> */}
              <DndProvider backend={HTML5Backend}>
                <DroppableElement
                  nodePath={{
                    obj: nodePath.obj,
                    path: `${nodePath.path}.node.childNodes`,
                  }}
                />
              </DndProvider>
            </div>
          )}
      </CustomTag>
    </>
  );
}

export default memo(Group);
