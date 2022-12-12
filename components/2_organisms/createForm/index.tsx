import { memo, useEffect } from 'react';
import { useFormData } from '../../0_atoms/store/useFormData';
import ConvertNodeToTags from '../../1_molecules/convertNodeToTags';

function CreateForm({ setRenderedTimeStamp }: any) {
  const formData = useFormData((s) => s.formData);

  // useLayoutEffect(() => {
  //   const a = async () => {
  //     const res = await axios.get('/api/json-data');
  //     setFormData(res.data);
  //     setServerData(res.data);
  //   };
  //   a();
  // }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderedTimeStamp(`${new Date().getTime()}`);
      console.timeLog();
    }
  }, []);

  return (
    formData && (
      <div className='max-w-screen w-full mx-auto prose'>
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
