import { get, set } from 'lodash-es';
import { memo, useState } from 'react';
import { useDrop, XYCoord } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import { useFormData } from '../store/useFormData';
import { ALL_TAGS, MAIN_TYPES, TAGS } from '../types/elementType';
import { initialNodeData } from './addElement';

function DroppableElement({ nodePath }: { nodePath: { obj: object; path: string } }) {
  const [data, setData] = useState({
    isOpen: false,
    nodeData: initialNodeData,
  });

  const setFormData = useFormData((s) => s.setFormData);

  const handleDrop = (item: { elementName: string; state: any }, monitor: any) => {
    const delta = monitor.getSourceClientOffset() as XYCoord;

    let mainType = MAIN_TYPES.CUSTOM_TAG;
    if (TAGS[MAIN_TYPES.GROUP].includes(item.elementName)) {
      mainType = MAIN_TYPES.GROUP;
    } else if (TAGS[MAIN_TYPES.VALUE_NODE].includes(item.elementName)) {
      mainType = MAIN_TYPES.VALUE_NODE;
    }

    const elData = {
      ...data.nodeData,
      node: {
        ...data.nodeData.node,
        type: MAIN_TYPES.CUSTOM_TAG,
        id: `${uuidv4()}`,
        label: item.elementName,
        data: {
          ...data.nodeData.node.data,
          value: item.elementName,
        },
      },
      mainType: mainType,
      subType: `${item.elementName.toLowerCase()}`,
    };

    setData({
      ...data,
      nodeData: elData,
      isOpen: false,
    });

    function saveElement() {
      let otherProps = {
        type: elData.subType.length > 0 ? elData.subType : elData.mainType,
      } as any;
      if (elData.mainType.includes(MAIN_TYPES.CUSTOM_TAG)) {
        otherProps = {
          ...otherProps,
          type: 'customTag-' + elData.subType,
        };
      }
      if (elData.mainType === MAIN_TYPES.GROUP) {
        otherProps = {
          ...otherProps,
          type: MAIN_TYPES.GROUP,
          groupLabel: elData.node.label,
          childNodes: [],
          minInstance: `${elData?.node?.minInstance || 1}`,
          maxInstance: `${elData?.node?.maxInstance || 20}`,
        };
      }

      // Converting the style into css styles, from node.style string
      const styleArray = elData.style.split(';');
      otherProps = {
        ...otherProps,
        style: { ...elData.node.style },
      };
      styleArray.forEach((el) => {
        const styleKey = el.split(':')[0];
        const styleValue = el.split(':')[1];
        if (styleKey && styleValue) {
          otherProps = {
            ...otherProps,
            style: {
              ...otherProps.style,
              [styleKey]: styleValue,
            },
          };
        }
      });

      const finalNode = {
        ...JSON.parse(JSON.stringify(elData.node)),
        ...otherProps,
      };
      // console.log('finalNode', elData.node, otherProps, finalNode);
      // setServerData(set(nodePath.obj, `${nodePath.path}`, [...get(nodePath.obj, `${nodePath.path}`), elData]));

      setFormData(
        set(nodePath.obj, `${nodePath.path}`, [
          ...get(nodePath.obj, `${nodePath.path}`),
          {
            node: finalNode,
          },
        ]),
      );
    }
    saveElement();
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
      className={`text-center text-white font-bold w-full transition-all rounded-md bg-teal-500 ${
        isOver ? '  min-h-[50px] h-[50px]  pt-1   ' : ' pt-0  h-2 '
      }`}
    >
      {isOver ? 'Drop Here' : ''}
    </div>
  );
}

export default memo(DroppableElement);
