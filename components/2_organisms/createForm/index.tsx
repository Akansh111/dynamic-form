import { memo } from 'react';
import { useFormData } from '../../0_atoms/store/useFormData';
import { useServerData } from '../../0_atoms/store/useServerData';
import ConvertNodeToTags from '../../1_molecules/convertNodeToTags';

function CreateForm() {
  const { formData, setFormData } = useFormData();
  const setServerData = useServerData((state) => state.setServerData);

  // useLayoutEffect(() => {
  //   const a = async () => {
  //     const res = await axios.get('/api/json-data');
  //     setFormData(res.data);
  //     setServerData(res.data);
  //   };
  //   a();
  // }, []);

  return (
    formData && (
      <div className='mx-auto prose'>
        <form>
          <h1>{formData.taskName}</h1>
          <h3>{formData.taskDescription}</h3>
          <div className=''>
            {formData.nodes.map(
              (node, key) =>
                node && (
                  <ConvertNodeToTags
                    nodeData={node}
                    nodePath={{
                      obj: formData,
                      path: `nodes[${key}]`,
                    }}
                    key={key}
                  />
                ),
            )}
          </div>
        </form>
      </div>
    )
  );
}

export default memo(CreateForm);
