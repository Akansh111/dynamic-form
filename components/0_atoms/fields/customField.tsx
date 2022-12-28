import { memo, useMemo } from 'react';
import ConvertNodeToTags from '../../1_molecules/convertNodeToTags';
import useStyles from '../hooks/useStyles';
import { INode, ISubNode } from '../types/dataType';

function CustomField({ node, nodePath }: { node: ISubNode; nodePath: { obj: object; path: string } }) {
  const { styleClassNames, styleInString } = useStyles({ node });

  const tag = useMemo(() => {
    if (node?.type && node?.type.startsWith('customTag')) {
      return node?.type.split('-')[1].toLowerCase();
    } else {
      return node?.type.toLowerCase();
    }
  }, [node.type]);
  const CustomTag = `${tag}` as keyof JSX.IntrinsicElements;

  const otherInputProps = useMemo(() => {
    // removing unnecessary props
    const props = JSON.parse(JSON.stringify(node)) || {};

    if (CustomTag.toLowerCase() === 'button') {
      props['type'] = 'button';
    }

    delete props.appearanceIndex;
    // delete props.type;
    // delete props.label;
    delete props.style;
    delete props.placeHolderText;
    delete props.readOnly;
    delete props.data;
    delete props.childNodes;
    delete props.closedTag;

    return props;
  }, [node]);

  return (
    <>
      <style jsx>{`
        ${tag} {
          ${styleInString};

          grid-column: span ${node?.style?.gridColumn || '12'} / span ${node?.style?.gridColumn || '12'};
        }
      `}</style>

      {node?.closedTag || node?.closedTag === 'true' ? (
        <CustomTag {...otherInputProps} className={`${styleClassNames}`} />
      ) : (
        <CustomTag {...otherInputProps} className={`${styleClassNames}`}>
          {node.data?.value ? node.data?.value : ''}

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
        </CustomTag>
      )}
    </>
  );
}

export default memo(CustomField);
