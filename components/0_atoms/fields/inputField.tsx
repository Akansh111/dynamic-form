import { set } from 'lodash-es';
import { InputHTMLAttributes, memo, useMemo, useState } from 'react';
import ConvertNodeToTags from '../../1_molecules/convertNodeToTags';
import useStyles from '../hooks/useStyles';
import { useServerData } from '../store/useServerData';
import { INode, ISubNode } from '../types/dataType';

function InputField({
  node,
  nodePath,
}: {
  node: ISubNode & InputHTMLAttributes<HTMLInputElement>;
  nodePath: { obj: object; path: string };
}) {
  const { styleClassNames, styleInString } = useStyles({ node });
  const setServerData = useServerData((state) => state.setServerData);
  // const setUniqueIdStore = useUniqueIdStore((state) => state.setUniqueIdStore);

  const [data, setData] = useState({
    value: `${node.data?.value ? node.data?.value : ''}`,
  });

  const inputType = useMemo(() => {
    if (node?.type) {
      switch (node.type) {
        case 'valueNode':
          return 'text';
        case 'Number':
          return 'number';
        default:
          return node.type.toLowerCase();
      }
    } else {
      return 'text';
    }
  }, [node?.type]);

  const tag = useMemo(() => {
    let tag = 'input';
    if (
      node?.type === 'textarea' ||
      node?.type === 'select' ||
      node?.type === 'option' ||
      node?.type === 'optgroup' ||
      node?.type === 'datalist' ||
      node?.type === 'output' ||
      node?.type === 'fieldset'
    ) {
      tag = node?.type.toLowerCase();
    }
    return tag;
  }, [node.type]);

  const otherInputProps = useMemo(() => {
    // removing unnecessary props
    let props = JSON.parse(JSON.stringify(node)) || {};

    delete props.appearanceIndex;
    delete props.type;
    // delete props.label;
    delete props.style;
    delete props.placeHolderText;
    delete props.readOnly;
    delete props.data;

    if (tag !== 'input' && tag !== 'textarea') {
      props['children'] =
        (node.childNodes &&
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
          ))) ||
        data?.value;
    }

    // Replacing the camelCase attributes from node to kebab-case attributes for html
    const convertInputAttributesToHtmlAttributes = Object.keys(props).reduce((acc, key) => {
      const newKey = key.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
      acc[newKey] = props[key];
      return acc;
    }, {});

    // adding the convertInputAttributesToHtmlAttributes to props
    props = { ...props, ...convertInputAttributesToHtmlAttributes };

    return props;
  }, [data?.value, node, nodePath.obj, nodePath.path, tag]);

  const CustomHtmlTag = `${tag}` as keyof JSX.IntrinsicElements;

  const isLabelImp = useMemo(() => {
    return node?.type === 'checkbox' || node?.type === 'radio';
  }, [node.type]);

  return (
    <div className={`transition-all ${!isLabelImp ? 'flex flex-col' : ''}`}>
      {
        <style jsx>{`
          input {
            ${styleInString}
          }
          label {
            ${styleInString}
          }
        `}</style>
      }

      {node?.label && !isLabelImp && (
        <label
          htmlFor={`${node.id}`}
          className={
            otherInputProps['required'] === 'true' ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''
          }
        >
          {node.label}
        </label>
      )}

      <CustomHtmlTag
        {...otherInputProps}
        id={`${node.id}`}
        className={`${styleClassNames} peer`}
        placeholder={node?.placeHolderText || node?.placeholder}
        style={node.style}
        type={inputType}
        value={data.value}
        onChange={(e: { target: { value: string } }) => {
          setData({ value: e.target.value });
          setServerData(set(nodePath.obj, `${nodePath.path}.node.data.value`, e.target.value));
        }}
      />

      {node?.errorLabel && node?.errorLabel.length > 0 && (
        <span className='transition-all peer-invalid:visible peer-focus-within:!invisible peer-placeholder-shown:!invisible invisible font-semibold text-red-700 '>
          {node?.errorLabel}
        </span>
      )}

      {node?.label && isLabelImp && (
        <label className='select-none' htmlFor={`${node.id}`}>
          {node.label}
        </label>
      )}
    </div>
  );
}

export default memo(InputField);
