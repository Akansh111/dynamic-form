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

  const convertInputAttributesToHtmlAttributes = useMemo(() => {
    let otherInputProps: any = {};

    if (node?.attributes === 'false') {
      return otherInputProps;
    }

    if (node?.autoFocus) otherInputProps['autofocus'] = node?.autoFocus;
    if (node?.autoComplete) otherInputProps['autocomplete'] = node?.autoComplete;
    if (node?.autoCapitalize) otherInputProps['autocapitalize'] = node?.autoCapitalize;
    if (node?.autoCorrect) otherInputProps['autocorrect'] = node?.autoCorrect;
    if (node?.spellCheck) otherInputProps['spellcheck'] = node?.spellCheck;
    if (node?.disabled) otherInputProps['disabled'] = node?.disabled;
    if (node?.readOnly) otherInputProps['readonly'] = node?.readOnly;
    if (node?.required) otherInputProps['required'] = node?.required;
    if (node?.multiple) otherInputProps['multiple'] = node?.multiple;
    if (node?.checked) otherInputProps['checked'] = node?.checked;
    if (node?.min) otherInputProps['min'] = node?.min;
    if (node?.max) otherInputProps['max'] = node?.max;
    if (node?.minLength) otherInputProps['minlength'] = node?.minLength;
    if (node?.maxLength) otherInputProps['maxlength'] = node?.maxLength;
    if (node?.pattern) otherInputProps['pattern'] = node?.pattern;
    if (node?.step) otherInputProps['step'] = node?.step;
    if (node?.size) otherInputProps['size'] = node?.size;
    if (node?.width) otherInputProps['width'] = node?.width;
    if (node?.height) otherInputProps['height'] = node?.height;
    if (node?.list) otherInputProps['list'] = node?.list;
    if (node?.accept) otherInputProps['accept'] = node?.accept;
    if (node?.alt) otherInputProps['alt'] = node?.alt;
    if (node?.src) otherInputProps['src'] = node?.src;
    if (node?.placeholder) otherInputProps['placeholder'] = node?.placeholder;
    if (node?.value) otherInputProps['value'] = node?.value;
    if (node?.defaultValue) otherInputProps['defaultValue'] = node?.defaultValue;
    if (node?.name) otherInputProps['name'] = node?.name;
    if (node?.id) otherInputProps['id'] = node?.id;
    if (node?.className) otherInputProps['class'] = node?.className;
    if (node?.title) otherInputProps['title'] = node?.title;
    if (node?.dir) otherInputProps['dir'] = node?.dir;
    if (node?.lang) otherInputProps['lang'] = node?.lang;
    if (node?.tabIndex) otherInputProps['tabindex'] = node?.tabIndex;
    if (node?.accessKey) otherInputProps['accesskey'] = node?.accessKey;
    if (node?.draggable) otherInputProps['draggable'] = node?.draggable;
    if (node?.hidden) otherInputProps['hidden'] = node?.hidden;
    if (node?.spellCheck) otherInputProps['spellcheck'] = node?.spellCheck;
    if (node?.translate) otherInputProps['translate'] = node?.translate;
    if (node?.role) otherInputProps['role'] = node?.role;
    if (node?.ariaLabel) otherInputProps['aria-label'] = node?.ariaLabel;
    if (node?.ariaLabelledBy) otherInputProps['aria-labelledby'] = node?.ariaLabelledBy;
    if (node?.ariaDescribedBy) otherInputProps['aria-describedby'] = node?.ariaDescribedBy;
    if (node?.ariaHidden) otherInputProps['aria-hidden'] = node?.ariaHidden;
    if (node?.ariaInvalid) otherInputProps['aria-invalid'] = node?.ariaInvalid;
    if (node?.ariaRequired) otherInputProps['aria-required'] = node?.ariaRequired;
    if (node?.ariaChecked) otherInputProps['aria-checked'] = node?.ariaChecked;
    if (node?.ariaPressed) otherInputProps['aria-pressed'] = node?.ariaPressed;
    if (node?.ariaExpanded) otherInputProps['aria-expanded'] = node?.ariaExpanded;
    if (node?.ariaLevel) otherInputProps['aria-level'] = node?.ariaLevel;
    if (node?.ariaMultiLine) otherInputProps['aria-multiline'] = node?.ariaMultiLine;
    if (node?.ariaMultiSelectable) otherInputProps['aria-multiselectable'] = node?.ariaMultiSelectable;
    if (node?.ariaOrientation) otherInputProps['aria-orientation'] = node?.ariaOrientation;
    if (node?.ariaOwns) otherInputProps['aria-owns'] = node?.ariaOwns;
    if (node?.ariaPosInSet) otherInputProps['aria-posinset'] = node?.ariaPosInSet;
    if (node?.ariaSetSize) otherInputProps['aria-setsize'] = node?.ariaSetSize;
    if (node?.ariaSort) otherInputProps['aria-sort'] = node?.ariaSort;
    if (node?.ariaValueMax) otherInputProps['aria-valuemax'] = node?.ariaValueMax;
    if (node?.ariaValueMin) otherInputProps['aria-valuemin'] = node?.ariaValueMin;
    if (node?.ariaValueNow) otherInputProps['aria-valuenow'] = node?.ariaValueNow;
    if (node?.ariaValueText) otherInputProps['aria-valuetext'] = node?.ariaValueText;
    if (node?.ariaLive) otherInputProps['aria-live'] = node?.ariaLive;
    if (node?.ariaRelevant) otherInputProps['aria-relevant'] = node?.ariaRelevant;
    if (node?.ariaAtomic) otherInputProps['aria-atomic'] = node?.ariaAtomic;
    if (node?.ariaBusy) otherInputProps['aria-busy'] = node?.ariaBusy;
    if (node?.ariaActiveDescendant) otherInputProps['aria-activedescendant'] = node?.ariaActiveDescendant;
    if (node?.ariaControls) otherInputProps['aria-controls'] = node?.ariaControls;
    if (node?.ariaFlowTo) otherInputProps['aria-flowto'] = node?.ariaFlowTo;
    if (node?.ariaHasPopup) otherInputProps['aria-haspopup'] = node?.ariaHasPopup;
    if (node?.ariaLabel) otherInputProps['aria-label'] = node?.ariaLabel;
    if (node?.ariaLabelledBy) otherInputProps['aria-labelledby'] = node?.ariaLabelledBy;
    if (node?.ariaDescribedBy) otherInputProps['aria-describedby'] = node?.ariaDescribedBy;
    if (node?.ariaDisabled) otherInputProps['aria-disabled'] = node?.ariaDisabled;
    if (node?.ariaReadonly) otherInputProps['aria-readonly'] = node?.ariaReadonly;
    if (node?.ariaRequired) otherInputProps['aria-required'] = node?.ariaRequired;
    if (node?.ariaSelected) otherInputProps['aria-selected'] = node?.ariaSelected;
    if (node?.ariaAutocomplete) otherInputProps['aria-autocomplete'] = node?.ariaAutocomplete;

    if (node?.ariaExpanded) otherInputProps['aria-expanded'] = node?.ariaExpanded;
    if (node?.ariaHasPopup) otherInputProps['aria-haspopup'] = node?.ariaHasPopup;
    if (node?.ariaLevel) otherInputProps['aria-level'] = node?.ariaLevel;
    if (node?.ariaMultiLine) otherInputProps['aria-multiline'] = node?.ariaMultiLine;
    if (node?.ariaMultiSelectable) otherInputProps['aria-multiselectable'] = node?.ariaMultiSelectable;
    if (node?.ariaOrientation) otherInputProps['aria-orientation'] = node?.ariaOrientation;

    return otherInputProps;
  }, [node]);

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
    const props = JSON.parse(JSON.stringify(node)) || {};

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
        {...convertInputAttributesToHtmlAttributes}
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
