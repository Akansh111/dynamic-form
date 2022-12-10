import { memo } from 'react';
import CustomField from '../0_atoms/fields/customField';
import Group from '../0_atoms/fields/groupField';
import InputField from '../0_atoms/fields/inputField';
import { INode, ISubNode } from '../0_atoms/types/dataType';

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
  const node = (nodeData?.node as ISubNode) || null;
  if (!node) return null;

  const defaultProps = {
    node: node,
    nodePath: nodePath,
  };

  const MainReturn = () => {
    if (node?.type === 'Group' || node?.type === 'fieldset') {
      return <Group {...defaultProps} />;
    } else if (node?.type.startsWith('customTag') || node?.type === 'optgroup' || node?.type === 'option') {
      return <CustomField {...defaultProps} />;
    } else {
      return <InputField {...defaultProps} />;
    }
  };

  return (
    <>
      <MainReturn />
    </>
  );
}

export default memo(ConvertNodeToTags);
