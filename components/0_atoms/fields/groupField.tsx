import { memo } from 'react';
import ConvertNodeToTags from '../../1_molecules/convertNodeToTags';
import useStyles from '../hooks/useStyles';
import { INode, ISubNode } from '../types/dataType';

function Group({ node, nodePath }: { node: ISubNode; nodePath: { obj: object; path: string } }) {
  const { styleInString, styleClassNames } = useStyles({ node });

  const CustomTag = `${node?.type.toLowerCase()}` as keyof JSX.IntrinsicElements;

  return (
    <CustomTag>
      <style jsx>{`
        label {
          ${styleInString}
        }
      `}</style>
      <div className='min-h-fit relative flex flex-col p-4 my-8 border-2 border-gray-600 rounded-lg'>
        <label className={'left-2 -top-4 text-md absolute px-2 bg-white ' + styleClassNames}>{node.groupLabel}</label>

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
      </div>
    </CustomTag>
  );
}

export default memo(Group);
