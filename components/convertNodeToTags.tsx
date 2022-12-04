import cloneDeep from 'lodash-es/cloneDeep';
import get from 'lodash-es/get';
import set from 'lodash-es/set';
import { memo, useContext } from 'react';
import { StoreContext } from './store/useStore';
import { IJsonData, INode } from './types/dataType';

function ConvertNodeToTags({
  nodeData,
  nodePath,
}: {
  nodeData: INode;
  nodePath: {
    obj: object;
    path: string;
  };
}) {
  const node = nodeData?.node || null;

  const {
    store,
    setStore,
  }: {
    store: IJsonData | null;
    setStore: React.Dispatch<React.SetStateAction<any>>;
  } = useContext<any>(StoreContext);

  // console.log(nodePath.obj, nodePath.path);
  // console.log(get(nodePath.obj, nodePath.path, {}));

  if (!node) return null;
  let styleClassNames = '';
  if (node?.style) {
    if (node?.style?.['Bold '] === 'true') {
      styleClassNames += ' font-bold ';
    }
    if (node?.style?.['Italic '] === 'true') {
      styleClassNames += ' italic ';
    }
    if (node?.style.underline === 'true') {
      styleClassNames += ' underline ';
    }
  }

  let styleInString = '';
  Object.entries(node?.style || {}).map((key) => {
    styleInString += `${key[0]}: ${key[1]};`;
  });

  const MainReturn = () => {
    switch (node.type) {
      case 'Group':
        return (
          <>
            <style jsx>{`
              label {
                ${styleInString}
              }
            `}</style>
            <div className='min-h-fit relative flex flex-col p-4 my-8 border-2 border-gray-600 rounded-lg'>
              <label
                className={
                  'left-2 -top-4 text-md absolute px-2 bg-white border border-gray-500 rounded-sm ' + styleClassNames
                }
              >
                {node.groupLabel}
              </label>

              {node.childNodes &&
                node.childNodes.length > 0 &&
                node.childNodes.map((childNode, key) => (
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
          </>
        );
      case 'Date':
        // const date = node.data?.value
        //   ? node.data?.value
        //       .split('-')
        //       .map((d, i) => node.data?.value.split('-')[2 - i])
        //       .join('-')
        //   : '';
        return (
          <>
            <style jsx>{`
              input {
                ${styleInString}
              }
            `}</style>
            {node?.label && <label htmlFor={`${node.id}`}>{node.label}</label>}
            <input
              className={'border border-gray-500' + styleClassNames}
              placeholder={node.label || node.placeHolderText}
              style={node.style}
              type='date'
              value={node.data?.value ? node.data?.value : ''}
              onChange={(e) => {
                const a = cloneDeep(nodePath.obj);
                set(a, `${nodePath.path}.node.data.value`, e.target.value);
                setStore(a);
              }}
              // {...node}
            />
          </>
        );
      case 'valueNode':
        return (
          <>
            <style jsx>{`
              input {
                ${styleInString}
              }
            `}</style>
            {node?.label && <label htmlFor={`${node.id}`}>{node.label}</label>}
            <input
              className={'border border-gray-500' + styleClassNames}
              placeholder={node.label || node.placeHolderText}
              style={node.style}
              value={get(nodePath.obj, nodePath.path)?.node.data?.value || ''}
              onChange={(e) => {
                const a = cloneDeep(nodePath.obj);
                set(a, `${nodePath.path}.node.data.value`, e.target.value);
                setStore(a);
              }}
              // {...node}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <MainReturn />
    </>
  );
}

export default memo(ConvertNodeToTags);
